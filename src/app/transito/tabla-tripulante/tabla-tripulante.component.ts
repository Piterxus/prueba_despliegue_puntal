import { Component ,Input,OnInit,EventEmitter, Output} from '@angular/core';
import { datos } from 'src/resources/datos';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';


import { ApiTripulantesService } from 'src/app/services/api/api-tripulantes.service';

@Component({
  selector: 'app-tabla-tripulante',
  templateUrl: './tabla-tripulante.component.html',
  styleUrls: ['./tabla-tripulante.component.css'],
  
})
export class TablaTripulanteComponent implements OnInit{
  dtOptions: DataTables.Settings = {};
  datos: any=[] ;
  arrayDatos:any;
  id:any;
  dtTrigger: Subject<any> = new Subject<any>();


  constructor( private apiService: ApiTripulantesService,
    private http: HttpClient,    private sharedDataService: SharedDataService,
    ) { 
  console.log(this.datos);

}
 
TripulanteSeleccionada: any = { datos_tecnicos: '' };
mostrarDatos:boolean =true;
@Input() mostrar:string='';
@Input() click:boolean=false;
crearTripulante :boolean=false;
inputs :number=0;
getInputsArray(): number[] {
  return Array(this.inputs).fill(0).map((x, i) => i);
}

//activa edicion tabla tripulante
anyadirTripulante()
{
  if(this.inputs<=5)
  {
this.inputs++;
  }
  
  this.crearTripulante=true;
}
ngOnInit(): void {
  // this.sharedDataService.getData("transitoSeleccionada").subscribe(data => {
  //   console.log("Datos obtenidos del servicio:", data);
    
  // });
  this.apiService.getAll().subscribe((data: any) => {
    this.datos = data;
  
    console.log('Después de la llamada a la API adsdsada:',this.datos);
    // Notificar a DataTables después de obtener los datos
    // this.dtTrigger.next(data);
  });
  if(this.mostrar=='si')
  {
    this.mostrarDatos=true;
  }
 else
 {
  this.mostrarDatos=false;
 }
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
