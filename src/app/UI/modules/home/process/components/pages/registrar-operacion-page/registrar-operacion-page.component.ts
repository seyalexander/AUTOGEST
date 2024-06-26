import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { marcaAutosModel } from 'src/app/domain/models/marcas-autos/marca-autos.model';
import { modeloAutosModel } from 'src/app/domain/models/modelo-autos/modelo-autos.model';
import { autosModel } from 'src/app/domain/models/autos/autos.model';
import { empleadoModel } from 'src/app/domain/models/empleado/empleado.model';
import { choferesModel } from 'src/app/domain/models/choferes/choferes.model';
import { Subscription } from 'rxjs';
import { ordenTrabajoModel } from 'src/app/domain/models/orden-trabajo/orden-trabajo.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GetOrdenTrabajoUseCases } from 'src/app/domain/useCase/get-orden-trabajo-use-case';
import { GetModeloAutosUseCases } from 'src/app/domain/useCase/get-modelo-autos-use-case';
import { GetMarcaAutosUseCases } from 'src/app/domain/useCase/get-marca-autos-use-case';
import { GetAutosUseCases } from 'src/app/domain/useCase/get-autos-use-case';
import { GetTipoEmpleadosUseCases } from 'src/app/domain/useCase/get-empleado-use-case';
import { GetChoferesUseCases } from 'src/app/domain/useCase/get-choferes-use-case';
import Swal from 'sweetalert2';
import { MensajeDatosIncorrectosComponent } from 'src/app/UI/shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';

@Component({
  selector: 'app-registrar-operacion-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, MensajeDatosIncorrectosComponent,CommonModule],
  templateUrl: './registrar-operacion-page.component.html',
  styleUrls: ['./registrar-operacion-page.component.css']
})
export class RegistrarOperacionPageComponent {
  tituloSwalCorrecto: String = 'CONFIRMACIÓN';
  datosMarcaAutoslista: Array <marcaAutosModel> = [];
  datosModeloAutoslista: Array <modeloAutosModel> = [];
  datosAutoslista: Array <autosModel> = [];
  datosEmpleadolista: Array <empleadoModel> = [];
  datosChoferlista: Array <choferesModel> = [];
  listObservers$: Array<Subscription> = [];

  @Output() cerrarComponenteEvent = new EventEmitter<void>();

  cerrarComponente(): void {
    this.showRegistro = false;
    this.cerrarComponenteEvent.emit();
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  ordenIngreso: ordenTrabajoModel = new ordenTrabajoModel();
  formularioRegistro: FormGroup = new FormGroup({});
  private marcaAutoSubscription: Subscription | undefined;
  private modeloAutoSubscription: Subscription | undefined;
  private autoSubscription: Subscription | undefined;
  private empleadoSubscription: Subscription | undefined;
  private choferSubscription: Subscription | undefined;

  constructor(
    private _postOrdenIngresoUseCase: GetOrdenTrabajoUseCases,
    private _getmodeloAutoUseCase: GetModeloAutosUseCases,
    private _getMarcaAutoUseCase: GetMarcaAutosUseCases,
    private _getAutoUseCase: GetAutosUseCases,
    private _getEmpleadoUseCase: GetTipoEmpleadosUseCases,
    private _getChoferUseCase: GetChoferesUseCases
  ) {}

  ngOnInit(): void {
    this.obtenerMarcaAutosExito()
    this.obtenerMordeloAutosExito()
    this.obtenerAutosExito()
    this.obtenerEmpleadosExito()
    this.obtenerChoferesExito()
    this.formularioRegistro = new FormGroup({
      Descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      Auto: new FormControl('', [
      ]),
      Empleado: new FormControl('', [
      ]),
      Chofer: new FormControl('', [
      ]),
    });
  }

  obtenerMarcaAutosExito(): void {
    this.marcaAutoSubscription = this._getMarcaAutoUseCase.getAllMarcaAutos().
      subscribe((Response: marcaAutosModel[]) => {
        this.datosMarcaAutoslista = Response;
      })
  }

  obtenerMordeloAutosExito(): void {
    this.modeloAutoSubscription = this._getmodeloAutoUseCase.getAllModeloAutos().
      subscribe((Response: modeloAutosModel[]) => {
        this.datosModeloAutoslista = Response;
      })
  }

  obtenerAutosExito(): void {
    this.autoSubscription = this._getAutoUseCase.getAllAutos().
      subscribe((Response: autosModel[]) => {
        this.datosAutoslista = Response;
      })
  }

  obtenerEmpleadosExito(): void {
    this.empleadoSubscription = this._getEmpleadoUseCase.getAllEmpleados().
      subscribe((Response: empleadoModel[]) => {
        this.datosEmpleadolista = Response;
      })
  }

  obtenerChoferesExito(): void {
    this.choferSubscription = this._getChoferUseCase.getAllChoferes().
      subscribe((Response: choferesModel[]) => {
        this.datosChoferlista = Response;
      })
  }

  public sendOrdenIngreso(): void {
      this._postOrdenIngresoUseCase
      .newOrdenTrabajo(this.ordenIngreso)
      .subscribe((response: any) => {
        this.cerrarComponente()
        this.mensajeValidacionRegistroCorrecto(response)
      });
  }

  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Orden de ingreso registrado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaTipoDocumento();
    });
  }

  regresarListaTipoDocumento() {
    window.location.reload();
  }

  ngOnDestroy(): void {
    if (this.marcaAutoSubscription) {
      this.marcaAutoSubscription.unsubscribe();
    }
    if (this.modeloAutoSubscription) {
      this.modeloAutoSubscription.unsubscribe();
    }
    if (this.autoSubscription) {
      this.autoSubscription.unsubscribe();
    }
    if (this.empleadoSubscription) {
      this.empleadoSubscription.unsubscribe();
    }
    if (this.choferSubscription) {
      this.choferSubscription.unsubscribe();
    }
  }
}
