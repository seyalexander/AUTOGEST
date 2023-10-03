import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosMarcasAutosComponent } from './table-datos-marcas-autos.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('TableDatosMarcasAutosComponent', () => {
  let component: TableDatosMarcasAutosComponent;
  let fixture: ComponentFixture<TableDatosMarcasAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDatosMarcasAutosComponent],
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(TableDatosMarcasAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
