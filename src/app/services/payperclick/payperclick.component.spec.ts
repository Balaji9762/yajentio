import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayperclickComponent } from './payperclick.component';

describe('PayperclickComponent', () => {
  let component: PayperclickComponent;
  let fixture: ComponentFixture<PayperclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayperclickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayperclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
