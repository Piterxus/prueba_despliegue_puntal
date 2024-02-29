import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() titulo: string = '';
  @Input() primera: string = '';
  @Input() segunda: string = '';
  @Input() tercera: string = '';

  @Input() datosApi: any;
  @Input() datosApi2: any;
  @Input() datosApi3: any;

  constructor() {}
}
