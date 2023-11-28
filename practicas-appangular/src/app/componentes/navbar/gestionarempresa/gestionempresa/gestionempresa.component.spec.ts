import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionempresaComponent } from './gestionempresa.component';

describe('GestionempresaComponent', () => {
  let component: GestionempresaComponent;
  let fixture: ComponentFixture<GestionempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionempresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
