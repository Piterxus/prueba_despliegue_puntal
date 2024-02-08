
import { ActivatedRoute } from '@angular/router';
import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-contenido-transito',
  templateUrl: './contenido-transito.component.html',
  styleUrls: ['./contenido-transito.component.css']
})
export class ContenidoTransitoComponent {
  constructor(private route: ActivatedRoute) { }

  @Input() nombre: string = "";
  

  //Formulario Embarcación
  inputsEmbarcacion: any[] = [
    { id: 1, label: 'Nombre', type: 'text' },
    { id: 2, label: 'Matricula', type: 'text' },
    { id: 3, label: 'Modelo', type: 'text' },
    { id: 4, label: 'Bandera', type: 'text' },
    { id: 5, label: 'Titular', type: 'text' },
    { id: 6, label: 'Eslora', type: 'number' },
    { id: 7, label: 'Manga', type: 'number' },
    { id: 8, label: 'Numero Registro', type: 'number' },
    { id: 9, label: 'Tipo', type: 'text' },
    { id: 10, label: 'Datos técnicos', type: 'text' },
  ];

  //Formulario transito
   inputsTransito: any[] =[
     {id:1,label:'Fecha entrada',type:'date'},
     {id:2,label:'Fecha salida',type:'date'},
     {id:3,label:'Embarcacion',type:'text'},
     {id:4,label:'Instalacion',type:'text'},
     {id:5,label:'Pantalán',type:'text'},
     {id:6,label:'Amarre',type:'text'},
     {id:7,label:'Proposito',type:'text'},
     {id:8,label:'Autorizaciones',type:'checkbox'},
     {id:9,label:'Patron',type:'text'},
     {id:10,label:'Datos estancia',type:'text'},
   ];
//Formulario plaza base
   inputsPlazaBase: any[] =[
     {id:1,label:'Fecha entrada',type:'text'},
     {id:2,label:'Embarcacion',type:'text'},
     {id:3,label:'Instalación',type:'text'},
     {id:4,label:'Pantalán',type:'text'},
     {id:5,label:'Amarre',type:'text'},
     {id:6,label:'Autorizacione',type:'checkbox'},
     {id:7,label:'Titular',type:'text'},
     {id:8,label:'Datos estancia',type:'text'},
  
  ];
  //titulo en funcion de la plantilla
  nombrePaginaEmbarcacion :string ="ALTA EMBARCACIÓN";
  nombrePaginaTransito :string ="ALTA TRANSITOS";
  nombrePaginaPlaza :string ="ALTA PLAZA BASE";
//En funcion de lo que se ponga cambia el text area
  datostecnicos: string = "Datos técnicos";
//modificar el boton en funcion del parametro
  anyadir: string = "AÑADIR";
  modificar: string = "MODIFICAR";

  
}

