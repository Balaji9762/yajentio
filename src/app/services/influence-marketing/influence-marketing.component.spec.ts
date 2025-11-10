import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenceMarketingComponent } from './influence-marketing.component';

describe('InfluenceMarketingComponent', () => {
  let component: InfluenceMarketingComponent;
  let fixture: ComponentFixture<InfluenceMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfluenceMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluenceMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
