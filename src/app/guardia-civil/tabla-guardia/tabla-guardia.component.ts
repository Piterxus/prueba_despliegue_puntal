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
  seleccionados: boolean[] = Array(this.datos.length).fill(false);
  selectAll: boolean = false;
  marcar(index: number)
  {
    this.seleccionados[index] = !this.seleccionados[index];
  }

 seleccionarTodas(): void {
  this.selectAll = !this.selectAll;
  this.seleccionados.fill(this.selectAll);
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

