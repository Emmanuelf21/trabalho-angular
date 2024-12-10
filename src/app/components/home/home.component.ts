import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pessoas = [
    { name: 'João', age: 25},
    { name: 'Maria', age: 30},
    { name: 'Carlos', age: 22},
  ]
}
