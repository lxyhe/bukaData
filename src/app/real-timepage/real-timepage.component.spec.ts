import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimepageComponent } from './real-timepage.component';

describe('RealTimepageComponent', () => {
  let component: RealTimepageComponent;
  let fixture: ComponentFixture<RealTimepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
