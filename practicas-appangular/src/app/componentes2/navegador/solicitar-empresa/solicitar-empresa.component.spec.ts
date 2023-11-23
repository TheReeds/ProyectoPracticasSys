import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarEmpresaComponent } from './solicitar-empresa.component';

describe('SolicitarEmpresaComponent', () => {
  let component: SolicitarEmpresaComponent;
  let fixture: ComponentFixture<SolicitarEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
