import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarsupervisoresComponent } from './asignarsupervisores.component';

describe('AsignarsupervisoresComponent', () => {
  let component: AsignarsupervisoresComponent;
  let fixture: ComponentFixture<AsignarsupervisoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignarsupervisoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignarsupervisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
