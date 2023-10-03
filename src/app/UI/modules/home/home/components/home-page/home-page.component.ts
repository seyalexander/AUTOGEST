import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { HeaderMovilHomeComponent } from '../../../../../shared/components/organisms/header-movil-home/header-movil-home.component';
import { AsideComponent } from '../../../../../shared/layouts/aside/aside.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [AsideComponent, HeaderMovilHomeComponent, NgIf, RouterOutlet]
})
export class HomePageComponent {
  showMenu:boolean = false;
  mostrarComponente(): void {
    this.showMenu = !this.showMenu;
  }
}
