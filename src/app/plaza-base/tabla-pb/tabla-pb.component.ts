import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { ApiService } from 'src/app/services/api/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-tabla-pb',
  templateUrl: './tabla-pb.component.html',
  styleUrls: ['./tabla-pb.component.css']
})

export class TablaPbComponent implements OnInit {
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
  
    someClickHandler(index: number): void {
      const rowData = this.datos[index];
      this.sharedDataService.setData('plazaBSeleccionada', rowData);
      this.router.navigate(['/plazabase/formulario'], {  relativeTo: this.activatedRoute.parent, queryParams: { tipo: 'vista' } });

 
    }

  
  ngOnInit(): void {
    this.apiService.getTablaPB().subscribe(data => {
      this.datos = data;
 
      console.log('Después de la llamada a la API:', this.datos);
      this.dtTrigger.next(data); 

    });
 
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
         };

    
  }
  
}
