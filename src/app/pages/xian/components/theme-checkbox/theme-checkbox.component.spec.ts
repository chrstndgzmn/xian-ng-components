import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCheckboxComponent } from './theme-checkbox.component';

describe('ThemeCheckboxComponent', () => {
  let component: ThemeCheckboxComponent;
  let fixture: ComponentFixture<ThemeCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
