import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyAndVideoComponent } from './photography-and-video.component';

describe('PhotographyAndVideoComponent', () => {
  let component: PhotographyAndVideoComponent;
  let fixture: ComponentFixture<PhotographyAndVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotographyAndVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographyAndVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
