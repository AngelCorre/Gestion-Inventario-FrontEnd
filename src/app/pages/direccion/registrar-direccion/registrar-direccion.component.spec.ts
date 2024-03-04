import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDireccionComponent } from './registrar-direccion.component';

describe('RegistrarDireccionComponent', () => {
  let component: RegistrarDireccionComponent;
  let fixture: ComponentFixture<RegistrarDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarDireccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
