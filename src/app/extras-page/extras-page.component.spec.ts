import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasPageComponent } from './extras-page.component';

describe('ExtrasPageComponent', () => {
  let component: ExtrasPageComponent;
  let fixture: ComponentFixture<ExtrasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
