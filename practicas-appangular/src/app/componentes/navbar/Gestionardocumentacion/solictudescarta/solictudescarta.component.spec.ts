import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolictudescartaComponent } from './solictudescarta.component';

describe('SolictudescartaComponent', () => {
  let component: SolictudescartaComponent;
  let fixture: ComponentFixture<SolictudescartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolictudescartaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolictudescartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
