import { Directive, ElementRef, EventEmitter, Input, NgZone, OnInit, Output  } from '@angular/core';

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}
@Directive({
  selector: '[appRecaptcha]',
  standalone: true
})
export class RecaptchaDirective implements OnInit {

  @Input() siteKey: string = ''; // Your reCAPTCHA site key
  @Output() captchaResponse = new EventEmitter<string>();
  @Output() captchaExpired = new EventEmitter<void>();

  private widgetId: number | null = null;

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.registerReCaptchaCallback();
    this.addRecaptchaScript();
  }

  registerReCaptchaCallback() {
    window.onRecaptchaLoad = () => {
      this.renderReCaptcha();
    };
  }

  renderReCaptcha() {
    this.widgetId = window.grecaptcha.render(this.elementRef.nativeElement, {
      'sitekey': this.siteKey,
      'callback': (response: string) => {
        this.ngZone.run(() => {
          this.captchaResponse.emit(response);
        });
      },
      'expired-callback': () => {
        this.ngZone.run(() => {
          this.captchaExpired.emit();
        });
      }
    });
  }

  resetCaptcha() {
    if (this.widgetId !== null) {
      window.grecaptcha.reset(this.widgetId);
    }
  }

  getCaptchaResponse(): string | null {
    if (this.widgetId === null) return null;
    return window.grecaptcha.getResponse(this.widgetId);
  }

  private addRecaptchaScript() {
    if (typeof window.grecaptcha === 'undefined') {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else {
      this.renderReCaptcha();
    }
  }

}
