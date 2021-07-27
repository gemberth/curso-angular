import { NgModule } from "@angular/core";
import { ContadoComponnent } from './contador/contador.component';

@NgModule({
  declarations:[
    ContadoComponnent
  ],
  exports:[
    ContadoComponnent,
  ],

})
export class ContadorModule{

}
