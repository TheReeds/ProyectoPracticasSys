import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDocumentosComponent } from './mis-documentos.component';

describe('MisDocumentosComponent', () => {
  let component: MisDocumentosComponent;
  let fixture: ComponentFixture<MisDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisDocumentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
