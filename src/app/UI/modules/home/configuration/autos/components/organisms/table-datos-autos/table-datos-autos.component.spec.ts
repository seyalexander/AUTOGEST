import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatosAutosComponent } from './table-datos-autos.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';

describe('TableDatosAutosComponent', () => {
  let component: TableDatosAutosComponent;
  let fixture: ComponentFixture<TableDatosAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDatosAutosComponent],
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(TableDatosAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
