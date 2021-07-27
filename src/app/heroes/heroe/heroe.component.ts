import { Component } from "@angular/core";


@Component({
  selector:'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent{
  nombre:string='Tony';
  edad:number=45;
  get cambiar(){
    return this.nombre.toUpperCase();

  }
  concatenar(): string{
    return `${this.nombre} - ${this.edad}`
  }
  cambiarN(){
    this.nombre='Gemberth';
  }

  cambiarA(){
    this.edad=25;
  }

}
