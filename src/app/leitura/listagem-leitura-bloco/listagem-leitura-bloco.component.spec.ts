import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemLeituraBlocoComponent } from './listagem-leitura-bloco.component';

describe('ListagemLeituraBlocoComponent', () => {
  let component: ListagemLeituraBlocoComponent;
  let fixture: ComponentFixture<ListagemLeituraBlocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemLeituraBlocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemLeituraBlocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
