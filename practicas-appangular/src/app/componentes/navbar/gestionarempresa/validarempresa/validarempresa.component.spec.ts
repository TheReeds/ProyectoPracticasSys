import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarempresaComponent } from './validarempresa.component';

describe('ValidarempresaComponent', () => {
  let component: ValidarempresaComponent;
  let fixture: ComponentFixture<ValidarempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarempresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidarempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
