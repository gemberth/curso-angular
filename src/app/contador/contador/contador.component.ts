import {Component} from '@angular/core'
@Component({
  selector:'app-contador',
  template:`
    <h1>Hola mundo</h1>
    <h1>{{base}}</h1>
    <button (click)="acomular(1)">+ 5</button>
    <span>{{nuemero}}</span>
    <button (click)="acomular(0)">- 5</button>

  `

})
export class ContadoComponnent{
  title: string = 'practica';
  nuemero:number=10;
  base:number=5
  acomular(signo:number){
    if (signo===1) {

      this.nuemero +=  this.base;
    }else{

      this.nuemero +=  -this.base;
    }

  }
}
