import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
   
  rutaActual: string = '';

  dura: string = 'Duracion media de las plazas base';
  dura2: string = 'Duracion media de los transitos';
  dura3: string = 'Datos de ocupacion de los amarres';
  dura4: string = 'Valores de embarcacion';

  linea1c1: string = 'Número total de plazas base: ';  linea2c1: string = 'Número total de tránsitos: ';  linea3c1: string = 'Número porcentaje de ocupación: ';

  linea1c2: string = 'Número total de plazas base: ';  linea2c2: string = 'Número total plazas base disponibles: ';  linea3c2: string = 'Número total de plazas en mantenimiento: ';

  linea1c3: string = 'Numero de embarcaciones: ';  linea2c3: string = 'País con más embarcaciones: ';  linea3c3: string = 'Tipo de embarcacion más comun: ';

  linea1c4: string = 'Número total de tránsitos: ';  linea2c4: string = 'Número total tránsitos disponibles: ';  linea3c4: string = 'Número total de tránsitos en mantenimiento: ';


  titulo: string = 'Estadísitcas generales';  titulo2: string = 'Datos generales de plazas base';
  titulo3: string = 'Resumen de datos de embarcaciones';  titulo4: string = 'Datos generales de tránsitos';


  datos1:any;  datos2:any;  datos3:any;

  datos12:any;  datos22:any;  datos32:any;

  datos13:any;  datos23:any;  datos33:any;
  
  datos14:any;  datos24:any;  datos34:any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
  
//primer card datos generales con transitos y plazas base

//cogemos la cantidad que hay de plazas bases de la api
    this.apiService.getCantidadPB().subscribe(data => {
    
      this.datos1 = data;
      console.log(this.datos1);
    });
//cogemos la cantidad que hay de transito de la api
    this.apiService.getCantidadTR().subscribe(data2 => {
    
      this.datos2 = data2;
      console.log(this.datos2);
    });

    //cogemos recogemos de la api el porcentaje que hay de ocupacion
    this.apiService.getPorcentajeOcupacion().subscribe(data3 => {
     
      this.datos3 = data3;
      console.log(this.datos3);
    });
   
//segundo card datos generalaes de plazas base

//cogemos la cantidad que hay de plazas bases de la api
    this.apiService.getCantidadPB().subscribe(data => {
      
      this.datos12 = data;
      console.log(this.datos12);
    });
//cogemos la cantidad que hay de plazas bases de la api que estan disponibles
    this.apiService.getPBdisponibles().subscribe(data2 => {

      this.datos22 = data2;
      console.log(this.datos2);
    });

  //cogemos la cantidad que hay de plazas bases de la api que estan en mantenimiento
    this.apiService.getPBmantenimiento().subscribe(data3 => {
    
      this.datos32 = data3;
      console.log(this.datos32);
    });


//tercer card resumen de datos de embarcaciones


  //cogemos la cantidad de embarcaciones que tenemos en la api
    this.apiService.getCantidadEmb().subscribe(data => {
    
      this.datos13 = data;
      console.log(this.datos13);
    });
  //cogemos la el pais que mas embaraciones tiene de la api
    this.apiService.getPaisConMas().subscribe(data => {
      
      this.datos23 = data.Origen;
      console.log(this.datos23);
    });


      //cogemos la el tipo de barco que es mas comun que tiene de la api
    this.apiService.getEmbcomun().subscribe(data => {
      
      this.datos33 = data.Tipo;
      console.log(this.datos33);
    });


    //carta card Datos generalaes de transitos

    //cogemos la cantidad que hay de transito de la api
    this.apiService.getCantidadTR().subscribe(data2 => {
     
      this.datos14= data2;
      console.log(this.datos14);
    });

    //cogemos la cantidad que hay de transito de la api de la api que estan disponibles
    this.apiService.getTRdisponibles().subscribe(data2 => {
    
      this.datos24= data2;
      console.log(this.datos24);
    });
  //cogemos la cantidad que hay de  transito de la api que estan en mantenimiento
    this.apiService.getTRmantenimiento().subscribe(data2 => {
   
      this.datos34= data2;
      console.log(this.datos34);
    });






  }
}