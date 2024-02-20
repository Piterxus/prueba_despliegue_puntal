import { Component, Input ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { datos } from 'src/resources/datos';
import { DialogoFormem } from '../embarcacion/dialogo-formem';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent 
{
  dtOptions: DataTables.Settings = {};
  datos = datos.transitos;

  @Input() input:any[]=[];
  @Input() boton:string="";
  @Input() texto:string="";
  @Input() nombre:string="";
  
 
  
  
  
}

