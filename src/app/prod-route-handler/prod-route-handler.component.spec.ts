import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRouteHandlerComponent } from './prod-route-handler.component';

describe('ProdRouteHandlerComponent', () => {
  let component: ProdRouteHandlerComponent;
  let fixture: ComponentFixture<ProdRouteHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdRouteHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdRouteHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
