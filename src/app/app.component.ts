import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'practica';
  nuemero:number=10;
  base:number=5
  acomular(signo:number){
      this.nuemero +=  this.base;
  }
}
