import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionListaComponent } from './direccion-lista.component';

describe('DireccionListaComponent', () => {
  let component: DireccionListaComponent;
  let fixture: ComponentFixture<DireccionListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DireccionListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
