import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSoftwareComponent } from './billing-software.component';

describe('BillingSoftwareComponent', () => {
  let component: BillingSoftwareComponent;
  let fixture: ComponentFixture<BillingSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
