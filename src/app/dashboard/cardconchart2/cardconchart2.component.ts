import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-cardconchart2',
  templateUrl: './cardconchart2.component.html',
  styleUrls: ['./cardconchart2.component.css']
})
export class Cardconchart2Component {
  @Input() texto: string = '';
  @Input() titulo: string = '';
  @Input() chartType: string=''; 
}
