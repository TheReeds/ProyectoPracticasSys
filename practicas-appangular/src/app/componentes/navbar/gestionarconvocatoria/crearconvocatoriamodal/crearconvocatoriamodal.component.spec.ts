import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearconvocatoriamodalComponent } from './crearconvocatoriamodal.component';

describe('CrearconvocatoriamodalComponent', () => {
  let component: CrearconvocatoriamodalComponent;
  let fixture: ComponentFixture<CrearconvocatoriamodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearconvocatoriamodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearconvocatoriamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
