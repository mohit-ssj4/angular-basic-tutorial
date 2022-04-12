import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterizedRoutesComponent } from './parameterized-routes.component';

describe('ParameterizedRoutesComponent', () => {
  let component: ParameterizedRoutesComponent;
  let fixture: ComponentFixture<ParameterizedRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterizedRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterizedRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
