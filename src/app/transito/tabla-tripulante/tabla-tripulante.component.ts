import { Component ,OnInit} from '@angular/core';
import { datos } from 'src/resources/datos';

import { NgModule } from '@angular/core';


@Component({
  selector: 'app-tabla-tripulante',
  templateUrl: './tabla-tripulante.component.html',
  styleUrls: ['./tabla-tripulante.component.css'],
  
})
export class TablaTripulanteComponent implements OnInit{
  dtOptions: DataTables.Settings = {};
  datos = datos.tripulantes;
constructor() { 
  console.log(this.datos);

}


ngOnInit(): void {
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true,
    language: {
      url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
    },
  };
}
}
