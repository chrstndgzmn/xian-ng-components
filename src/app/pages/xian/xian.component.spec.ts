import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XianComponent } from './xian.component';

describe('XianComponent', () => {
  let component: XianComponent;
  let fixture: ComponentFixture<XianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
