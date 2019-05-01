import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioArquivoBlocoComponent } from './envio-arquivo-bloco.component';

describe('EnvioArquivoBlocoComponent', () => {
  let component: EnvioArquivoBlocoComponent;
  let fixture: ComponentFixture<EnvioArquivoBlocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioArquivoBlocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioArquivoBlocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
