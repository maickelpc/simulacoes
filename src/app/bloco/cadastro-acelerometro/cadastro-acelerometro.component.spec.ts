import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAcelerometroComponent } from './cadastro-acelerometro.component';

describe('CadastroAcelerometroComponent', () => {
  let component: CadastroAcelerometroComponent;
  let fixture: ComponentFixture<CadastroAcelerometroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAcelerometroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAcelerometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
