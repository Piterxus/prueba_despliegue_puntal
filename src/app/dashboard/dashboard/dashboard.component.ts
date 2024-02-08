import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  rutaActual: string = '';
  texto1: string = 'Número total de plazas base:';
  texto2: string = 'Texto de la tarjeta 2';
  texto3: string = 'Texto de la tarjeta 3';
  texto4: string = 'Texto de la tarjeta 4';
  texto5: string = 'Texto de la tarjeta 5';
  texto6: string = 'Texto de la tarjeta 6';
  titulo: string = 'Titulo de la tarjeta';
  titulo1: string = 'estoy aqui';
  comprueba: string = 'Comprueba de la tarjeta ';
  prueba: string = 'Comprueba de la tarjeta';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(urlSegment => {
      this.rutaActual = urlSegment.join('/');
     
    });
  }
}