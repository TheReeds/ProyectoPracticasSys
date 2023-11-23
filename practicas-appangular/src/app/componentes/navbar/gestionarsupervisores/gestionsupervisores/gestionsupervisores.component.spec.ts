import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionsupervisoresComponent } from './gestionsupervisores.component';

describe('GestionsupervisoresComponent', () => {
  let component: GestionsupervisoresComponent;
  let fixture: ComponentFixture<GestionsupervisoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionsupervisoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionsupervisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
