import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  //lista de héroes:
  public heroNames: string[] = ['Spiderman', 'Batman', 'Thor', 'Hulk'];
  public deletedHero?: string = '';

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();


  }
}
