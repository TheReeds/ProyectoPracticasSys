import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisInformesComponent } from './mis-informes.component';

describe('MisInformesComponent', () => {
  let component: MisInformesComponent;
  let fixture: ComponentFixture<MisInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisInformesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
