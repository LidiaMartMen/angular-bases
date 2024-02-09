import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./component/heroes/hero/hero.component";
import { ListComponent } from "./component/heroes/list/list.component";





@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    //importar esto para que funcionen los *ngFor, *ngIf...
    CommonModule
  ]
})
export class HeroesModule {

}
