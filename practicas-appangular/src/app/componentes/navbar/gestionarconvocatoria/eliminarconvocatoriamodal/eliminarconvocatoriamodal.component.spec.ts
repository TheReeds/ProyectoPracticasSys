import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarconvocatoriamodalComponent } from './eliminarconvocatoriamodal.component';

describe('EliminarconvocatoriamodalComponent', () => {
  let component: EliminarconvocatoriamodalComponent;
  let fixture: ComponentFixture<EliminarconvocatoriamodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarconvocatoriamodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarconvocatoriamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
