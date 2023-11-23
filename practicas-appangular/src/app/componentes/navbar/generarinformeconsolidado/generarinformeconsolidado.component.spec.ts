import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarinformeconsolidadoComponent } from './generarinformeconsolidado.component';

describe('GenerarinformeconsolidadoComponent', () => {
  let component: GenerarinformeconsolidadoComponent;
  let fixture: ComponentFixture<GenerarinformeconsolidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarinformeconsolidadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerarinformeconsolidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
