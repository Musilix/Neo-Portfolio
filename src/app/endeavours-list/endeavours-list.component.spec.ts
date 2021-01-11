import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndeavoursListComponent } from './endeavours-list.component';

describe('EndeavoursListComponent', () => {
  let component: EndeavoursListComponent;
  let fixture: ComponentFixture<EndeavoursListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndeavoursListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndeavoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
