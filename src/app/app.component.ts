import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './UI/shared/layouts/aside/aside.component';
import { HeaderMovilHomeComponent } from './UI/shared/components/organisms/header-movil-home/header-movil-home.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [AsideComponent, HeaderMovilHomeComponent, NgIf, RouterOutlet]
})
export class AppComponent {
  title = 'SISTEMA_RETAIL_FRONT_ANGULAR';
}
