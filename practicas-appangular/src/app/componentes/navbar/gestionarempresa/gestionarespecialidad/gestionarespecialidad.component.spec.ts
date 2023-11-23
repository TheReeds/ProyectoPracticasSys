import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarespecialidadComponent } from './gestionarespecialidad.component';

describe('GestionarespecialidadComponent', () => {
  let component: GestionarespecialidadComponent;
  let fixture: ComponentFixture<GestionarespecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarespecialidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionarespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
