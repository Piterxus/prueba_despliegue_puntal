import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { datos } from 'src/resources/datos';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
// import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-tabla-transito',
  templateUrl: './tabla-transito.component.html',
  styleUrls: ['./tabla-transito.component.css']
})
export class TablaTransitoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  datos = datos.transitos;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedDataService: SharedDataService
  ){}

  someClickHandler(index: number): void {
    const rowData = this.datos[index];
    this.sharedDataService.setData('transitoSeleccionada', rowData);
    this.router.navigate(['/transito/formulario'], {
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
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
       // url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/ko.json',
      },
    };
  }
  
}
