import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { ApiService } from 'src/app/services/api/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


// import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-tabla-transito',
  templateUrl: './tabla-transito.component.html',
  styleUrls: ['./tabla-transito.component.css']
})
export class TablaTransitoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  datos: any = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedDataService: SharedDataService,
    private apiService: ApiService,
    private http: HttpClient

    
  ){}
//mete en el set data en funcion de la posicion el transito
  someClickHandler(index: number): void {
    const rowData = this.datos[index];
    this.sharedDataService.setData('transitoSeleccionada', rowData);
    console.log(' wed transitoSeleccionada:', this.sharedDataService.getData('transitoSeleccionada'));
    this.router.navigate(['formulario'], { relativeTo: this.activatedRoute.parent, queryParams: { tipo: 'vista' } });

  }
  ngOnInit(): void {
    this.apiService.getTablaTransito().subscribe((data: any) => {
      this.datos = data;

      console.log('Después de la llamada a la API:', this.datos);
      this.dtTrigger.next(data); 

      // Notificar a DataTables después de obtener los datos
      // this.dtTrigger.next(data);
    });
    // Configuración de DataTables
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
      // rowCallback: (row: Node, data: any[] | Object, index: number) => {
      //   const self = this;
      //   // row.addEventListener('click', () => {
      //   //   self.someClickHandler(index);
      //   // });
      //   $('td', row).off('click');
      //   $('td', row).on('click', () => {
      //     self.someClickHandler(index);
      //   });
      //   return row;
      // }
    };

    
  }
  
}
