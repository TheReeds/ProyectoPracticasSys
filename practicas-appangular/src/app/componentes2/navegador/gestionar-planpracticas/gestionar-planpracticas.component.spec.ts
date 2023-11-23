import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPlanpracticasComponent } from './gestionar-planpracticas.component';

describe('GestionarPlanpracticasComponent', () => {
  let component: GestionarPlanpracticasComponent;
  let fixture: ComponentFixture<GestionarPlanpracticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarPlanpracticasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionarPlanpracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
