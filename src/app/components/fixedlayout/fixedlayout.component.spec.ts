import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedlayoutComponent } from './fixedlayout.component';

describe('FixedlayoutComponent', () => {
  let component: FixedlayoutComponent;
  let fixture: ComponentFixture<FixedlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
