import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisConvocatoriasComponent } from './mis-convocatorias.component';

describe('MisConvocatoriasComponent', () => {
  let component: MisConvocatoriasComponent;
  let fixture: ComponentFixture<MisConvocatoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisConvocatoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
