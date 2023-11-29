import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarconvocatoriaComponent } from './gestionarconvocatoria.component';

describe('GestionarconvocatoriaComponent', () => {
  let component: GestionarconvocatoriaComponent;
  let fixture: ComponentFixture<GestionarconvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarconvocatoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarconvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
