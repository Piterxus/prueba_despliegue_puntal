import { Component,OnInit, Output,EventEmitter } from '@angular/core';
import { datos } from 'src/resources/datos';


@Component({
  selector: 'app-tabla-guardia',
  templateUrl: './tabla-guardia.component.html',
  styleUrls: ['./tabla-guardia.component.css']
})
export class TablaGuardiaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  datos = datos.transitos;
  checkboxAll=false;
  marcar()
  {
    this.checkboxAll=true;
  }
constructor() { 
  console.log(this.datos);
}

ngOnInit(): void {
  this.dtOptions = {
   
    pageLength: 10,
    processing: true,
    language: {
      url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
    },
  };
}
}

