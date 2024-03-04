import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresListaComponent } from './proveedores-lista.component';

describe('ProveedoresListaComponent', () => {
  let component: ProveedoresListaComponent;
  let fixture: ComponentFixture<ProveedoresListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProveedoresListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProveedoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
