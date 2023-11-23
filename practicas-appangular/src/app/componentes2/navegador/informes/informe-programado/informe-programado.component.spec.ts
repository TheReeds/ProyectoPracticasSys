import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeProgramadoComponent } from './informe-programado.component';

describe('InformeProgramadoComponent', () => {
  let component: InformeProgramadoComponent;
  let fixture: ComponentFixture<InformeProgramadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeProgramadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformeProgramadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
