import { Component } from '@angular/core';

@Component({
  selector: 'app-raclette',
  templateUrl: './raclette.component.html',
  styleUrls: ['./raclette.component.css']
})
export class RacletteComponent {
  title: string = 'Raclette Party';

  isThisIngredientVital: boolean = true;

}
