import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondocumentosComponent } from './gestiondocumentos.component';

describe('GestiondocumentosComponent', () => {
  let component: GestiondocumentosComponent;
  let fixture: ComponentFixture<GestiondocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestiondocumentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestiondocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
