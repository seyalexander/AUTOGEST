import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { Subscription } from 'rxjs';
import { autosModel } from 'src/app/domain/models/autos/autos.model';
import { clienteModel } from 'src/app/domain/models/clientes/clientes.model';
import { modeloAutosModel } from 'src/app/domain/models/modelo-autos/modelo-autos.model';
import { GetAutosUseCases } from 'src/app/domain/useCase/get-autos-use-case';
import { GetClientesUseCases } from 'src/app/domain/useCase/get-clientes-use-case';
import { GetModeloAutosUseCases } from 'src/app/domain/useCase/get-modelo-autos-use-case';
import { MensajeDatosIncorrectosComponent } from 'src/app/UI/shared/components/validadores/mensaje-datos-incorrectos/mensaje-datos-incorrectos.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-datos-autos-page',
  templateUrl: './registro-datos-autos-page.component.html',
  styleUrls: ['./registro-datos-autos-page.component.css'],
  standalone: true,
  imports: [DropDownListModule, FormsModule, ReactiveFormsModule, NgIf, MensajeDatosIncorrectosComponent, CommonModule]
})
export class RegistroDatosAutosPageComponent {

  //============================================================================
  // OCULTAR MODAL DESDE LA PANTALLA DE REGISTRO
  //============================================================================
  @Output() cerrarComponenteEvent = new EventEmitter<void>();
  cerrarComponente(): void {
    this.showRegistro = false;
    this.cerrarComponenteEvent.emit();
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  //============================================================================
  // INYECCION DE SERVICIOS DESDE LOS CASOS DE USO
  //============================================================================
  constructor(
    private _postAutoUseCase: GetAutosUseCases,
    private _getModeloAutoUseCase: GetModeloAutosUseCases,
    private _getClienteUseCase: GetClientesUseCases
  ) { }

  Auto: autosModel = new autosModel();
  formularioRegistro: FormGroup = new FormGroup({});

  //============================================================================
  // FUNCIÓN PRINCIPAL
  //============================================================================

  ngOnInit(): void {

    this.obtenerModeloAutosExito()
    this.obtenerClientesExito()

    this.formularioRegistro = new FormGroup({
      Auto: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      AutoDb: new FormControl('', []),
      AutoDbC: new FormControl('', [])
    });
  }

  //============================================================================
  // MOSTRAR LISTADO MODELO AUTOS - DESPLEGABLE
  //============================================================================

  datosModeloAutoslista: Array<modeloAutosModel> = [];
  private modeloAutoSubscription: Subscription | undefined;

  obtenerModeloAutosExito(): void {
    this.modeloAutoSubscription = this._getModeloAutoUseCase.getAllModeloAutos().
      subscribe((Response: modeloAutosModel[]) => {
        this.datosModeloAutoslista = Response;
      })
  }

  //============================================================================
  // MOSTRAR LISTADO CLIENTES - DESPLEGABLE
  //============================================================================

  datosClienteslista: Array<clienteModel> = [];
  private clienteSubscription: Subscription | undefined;

  obtenerClientesExito(): void {
    this.clienteSubscription = this._getClienteUseCase.getAllClientes().
      subscribe((Response: clienteModel[]) => {
        this.datosClienteslista = Response;
      })
  }

  //============================================================================
  // GUARDAR LO REGISTRADO
  //============================================================================

  public sendModeloAuto(): void {
    this._postAutoUseCase
      .newAuto(this.Auto)
      .subscribe((response: any) => {
        this.cerrarComponente()
        this.mensajeValidacionRegistroCorrecto(response)
      });
  }

  //============================================================================
  // SWEETALERT
  //============================================================================

  tituloSwalCorrecto: String = 'CONFIRMACIÓN';
  mensajeValidacionRegistroCorrecto(response: any) {
    const message = response && response.message ? response.message : 'Auto creado correctamente.';
    Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
      this.regresarListaTipoDocumento();
    });
  }

  //============================================================================
  // RECARGAR PÁGINA
  //============================================================================

  regresarListaTipoDocumento() {
    window.location.reload();
  }

  //============================================================================
  // DESTRCUCCIÓN DEL CARGADO DE DATOS
  //============================================================================

  ngOnDestroy(): void {
    if (this.modeloAutoSubscription) {
      this.modeloAutoSubscription.unsubscribe();
    }
    if (this.clienteSubscription) {
      this.clienteSubscription.unsubscribe();
    }
  }
}
