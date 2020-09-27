import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashThreeSectionComponent } from './splash-three-section.component';

describe('SplashThreeSectionComponent', () => {
  let component: SplashThreeSectionComponent;
  let fixture: ComponentFixture<SplashThreeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashThreeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashThreeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
