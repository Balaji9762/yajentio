import { Component, type OnInit } from '@angular/core';
// import { CommonModule } from "@angular/common"
import { DomSanitizer, type SafeUrl } from '@angular/platform-browser';
import { YtaEventsService } from './yta-events.service';
import { YtaEvent } from './yta-event';
@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  events: YtaEvent[] = []
  loading = false
  error: string | null = null

  constructor(
    private ytaEventsService: YtaEventsService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.loadEvents()
  }

  loadEvents(): void {
    this.loading = true
    this.error = null

    this.ytaEventsService.getEvents().subscribe({
      next: (events) => {
        this.events = events
        this.loading = false
      },
      error: (error) => {
        this.error = error.message
        this.loading = false
      },
    })
  }

  getEventImage(imageData: string | null | undefined): SafeUrl | null {
    if (!imageData) {
      return null
    }

    return this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${imageData}`)
  }

  trackByEventId(index: number, event: YtaEvent): number {
    return event.id
  }
}
