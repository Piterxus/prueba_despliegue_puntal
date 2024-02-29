import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cardconchart3',
  templateUrl: './cardconchart3.component.html',
  styleUrls: ['./cardconchart3.component.css']
})
export class Cardconchart3Component {
  @Input() texto: string = '';
  @Input() titulo: string = '';
  @Input() chartType: string=''; 

}
