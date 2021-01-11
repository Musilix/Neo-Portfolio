import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndeavourItemComponent } from './endeavour-item.component';

describe('EndeavourItemComponent', () => {
  let component: EndeavourItemComponent;
  let fixture: ComponentFixture<EndeavourItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndeavourItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndeavourItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
