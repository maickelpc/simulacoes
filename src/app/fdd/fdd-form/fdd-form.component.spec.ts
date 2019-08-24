import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FddFormComponent } from './fdd-form.component';

describe('FddFormComponent', () => {
  let component: FddFormComponent;
  let fixture: ComponentFixture<FddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
