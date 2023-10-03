import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosEmpleadosComponent } from './table-datos-empleados.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('TableDatosEmpleadosComponent', () => {
  let component: TableDatosEmpleadosComponent;
  let fixture: ComponentFixture<TableDatosEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDatosEmpleadosComponent],
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(TableDatosEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
