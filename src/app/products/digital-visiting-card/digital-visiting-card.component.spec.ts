import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalVisitingCardComponent } from './digital-visiting-card.component';

describe('DigitalVisitingCardComponent', () => {
  let component: DigitalVisitingCardComponent;
  let fixture: ComponentFixture<DigitalVisitingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalVisitingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalVisitingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
