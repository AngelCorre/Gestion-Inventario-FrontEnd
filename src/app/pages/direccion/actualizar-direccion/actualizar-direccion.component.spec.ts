import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDireccionComponent } from './actualizar-direccion.component';

describe('ActualizarDireccionComponent', () => {
  let component: ActualizarDireccionComponent;
  let fixture: ComponentFixture<ActualizarDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarDireccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
