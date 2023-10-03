import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosClientesComponent } from './table-datos-clientes.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('TableDatosClientesComponent', () => {
  let component: TableDatosClientesComponent;
  let fixture: ComponentFixture<TableDatosClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDatosClientesComponent],
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(TableDatosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
