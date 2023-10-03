import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  showMenu:boolean = false;
  mostrarComponente(): void {
    this.showMenu = !this.showMenu;
  }
}
