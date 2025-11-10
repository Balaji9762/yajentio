import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNEWSComponent } from './add-news.component';

describe('AddNEWSComponent', () => {
  let component: AddNEWSComponent;
  let fixture: ComponentFixture<AddNEWSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNEWSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNEWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
