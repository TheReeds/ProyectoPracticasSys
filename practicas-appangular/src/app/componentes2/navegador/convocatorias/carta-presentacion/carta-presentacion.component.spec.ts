import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPresentacionComponent } from './carta-presentacion.component';

describe('CartaPresentacionComponent', () => {
  let component: CartaPresentacionComponent;
  let fixture: ComponentFixture<CartaPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaPresentacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartaPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
