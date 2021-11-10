import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAndSliderComponent } from './menu-and-slider.component';

describe('MenuAndSliderComponent', () => {
  let component: MenuAndSliderComponent;
  let fixture: ComponentFixture<MenuAndSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAndSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAndSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
