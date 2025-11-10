import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLanguageTrainingComponent } from './c-language-training.component';

describe('CLanguageTrainingComponent', () => {
  let component: CLanguageTrainingComponent;
  let fixture: ComponentFixture<CLanguageTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CLanguageTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLanguageTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
