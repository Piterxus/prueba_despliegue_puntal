import { Component ,Input,OnInit,EventEmitter, Output} from '@angular/core';
import { datos } from 'src/resources/datos';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import {FormBuilder, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs';


import { ApiService } from 'src/app/services/api/api.service';
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
 idTripulante:any=[];


  constructor(   public fb: FormBuilder,private apiService: ApiService,
    private http: HttpClient,    private sharedDataService: SharedDataService,
    ) 
    { 
      

}
//crea 4 arrays donde se van a guardar los ngModel del formulario
tripulantes: any[] = [
  {
    NumeroDeDocumento: '',
    Nombre: '',
    Sexo: '',
    Nacionalidad: ''
  },
  {
    NumeroDeDocumento: '',
    Nombre: '',
    Sexo: '',
    Nacionalidad: ''
  },
  {
    NumeroDeDocumento: '',
    Nombre: '',
    Sexo: '',
    Nacionalidad: ''
  },
  {
    NumeroDeDocumento: '',
    Nombre: '',
    Sexo: '',
    Nacionalidad: ''
  },
];

TripulanteSeleccionada: any = { datos_tecnicos: '' };
mostrarDatos:boolean =true;
@Input() mostrar:string='';
@Input() click:boolean=false;
crearTripulante :boolean=false;
inputs :number=0;
getInputsArray(): number[] {
  return Array(this.inputs).fill(0).map((x, i) => i);
}
//por cada tripulante recorre y inserta 4 uno por uno los tripulantes con la api
guardarTripulante(id:any) {
  this.tripulantes.forEach((tripulante, index) => {
    console.log(`Datos del tripulante ${index + 1}:`);
    console.log('Nombre:', tripulante.Nombre);
    console.log('Sexo:', tripulante.Sexo);
    console.log('Documento:', tripulante.NumeroDeDocumento);
    console.log('Nacionalidad:', tripulante.Nacionalidad);
  this.apiService.addTripulante(tripulante,id)
.pipe(
  catchError(error => {
    console.error('Error en la solicitud:', error);
    console.log('Mensaje de error:', error.error);
    throw error;
  })
)
.subscribe(
  response => {
  
    console.log('Respuesta del servicio en el componente:', response);
  }
);
//vacia tripulante
tripulante = {
  NumeroDeDocumento: '',
  Nombre: '',
  Sexo: '',
  Nacionalidad: ''
};
  });
  
  
}

editarTripulante() {
  this.tripulantes.forEach((tripulante, index) => {
    console.log(`Datos del tripulante ${index + 1}:`);
    console.log('Nombre:', tripulante.Nombre);
    console.log('Sexo:', tripulante.Sexo);
    console.log('Documento:', tripulante.NumeroDeDocumento);
    console.log('Nacionalidad:', tripulante.Nacionalidad);
    console.log('id:', this.idTripulante[index]);
    let id=this.idTripulante[index]
  this.apiService.update(id,"tripulante",tripulante)
  
.pipe(
  catchError(error => {
    console.error('Error en la solicitud:', error);
    console.log('Mensaje de error:', error.error);
    throw error;
  })
)
.subscribe(
  response => {
  
    console.log('Respuesta del servicio en el componente:', response);
  }
);
//vacia tripulante
tripulante = {
  NumeroDeDocumento: '',
  Nombre: '',
  Sexo: '',
  Nacionalidad: ''
};
  });
  
  
}





//activa edicion tabla tripulante y agrega inputs para añadir tripulante
anyadirTripulante()
{
  
  this.crearTripulante=true;
  this.click=false;
}

ngOnInit(): void {
  // this.sharedDataService.getData("transitoSeleccionada").subscribe(data => {
  //   console.log("Datos obtenidos del servicio:", data);
    
  // });
  this.apiService.getAllTripulante().subscribe((data: any) => {
    this.datos = data;
  
    console.log('Después de la llamada a la API :',this.datos);
    if (this.datos.length <= this.tripulantes.length) 
    {
      for (let i = 0; i < this.tripulantes.length; i++) 
      {
        this.tripulantes[i].NumeroDeDocumento = this.datos[i].NumeroDeDocumento;
        this.tripulantes[i].Nombre = this.datos[i].Nombre;
        this.tripulantes[i].Sexo = this.datos[i].Sexo;
        this.tripulantes[i].Nacionalidad = this.datos[i].Nacionalidad;
        this.idTripulante[i] = this.datos[i].id;

      }
    }
    
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
