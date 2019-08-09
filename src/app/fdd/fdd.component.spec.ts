import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FddComponent } from './fdd.component';

describe('FddComponent', () => {
  let component: FddComponent;
  let fixture: ComponentFixture<FddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
