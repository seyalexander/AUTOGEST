import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-datos-incorrectos',
  templateUrl: './mensaje-datos-incorrectos.component.html',
  styleUrls: ['./mensaje-datos-incorrectos.component.css']
})
export class MensajeDatosIncorrectosComponent {
  @Input() mensajeError: String = '';
}
