import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootComponentsComponent } from './foot-components.component';

describe('FootComponentsComponent', () => {
  let component: FootComponentsComponent;
  let fixture: ComponentFixture<FootComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
