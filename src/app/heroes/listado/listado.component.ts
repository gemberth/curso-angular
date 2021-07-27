import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

heroes:string[]=['Thor','Spiderman','Deapool','Chubaca','Mando'];

  heroesBorrados:string ='';

borrarHero():void{

  let heroors = this.heroes.shift() || '';
//this.heroesBorrados.push(...heroors)
this.heroesBorrados=heroors;


}

}
