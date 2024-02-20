import { Component,OnInit , Output, EventEmitter } from '@angular/core';
import { datos } from 'src/resources/datos';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';

@Component({
  selector: 'app-tabla-pb',
  templateUrl: './tabla-pb.component.html',
  styleUrls: ['./tabla-pb.component.css']
})

export class TablaPbComponent implements OnInit {

    dtOptions: DataTables.Settings = {};
    datos = datos.plazaBase;
    constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private sharedDataService: SharedDataService
    ){}
  
    someClickHandler(index: number): void {
      const rowData = this.datos[index];
      this.sharedDataService.setData('plazaBSeleccionada', rowData);
      this.router.navigate(['/plazabase/formulario'], {
        queryParams: { tipo: 'vista' }, // O 'vacio' según tus necesidades
      }); // Si no es con ruta abosulta, no funciona
              
      // this.router.navigate(['../formulario'], { relativeTo: this.activatedRoute.parent });
    }

  
  ngOnInit(): void {
    console.log(this.datos);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json',
      },
    };
  }
  
}
