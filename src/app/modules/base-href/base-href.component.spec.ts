import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseHrefComponent } from './base-href.component';

describe('BaseHrefComponent', () => {
  let component: BaseHrefComponent;
  let fixture: ComponentFixture<BaseHrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseHrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseHrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
