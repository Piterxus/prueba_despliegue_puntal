import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogoFormem } from '../dialogo-formem';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormdialogoemComponent } from '../formdialogoem/formdialogoem.component';
import { ApiService } from 'src/app/services/api/api.service';
import { catchError } from 'rxjs';
import { error } from 'jquery';
@Component({
  selector: 'app-formulario-embarcacion',
  templateUrl: './formulario-embarcacion.component.html',
  styleUrls: ['./formulario-embarcacion.component.css']
})
export class FormularioEmbarcacionComponent implements OnInit {
  mostrarVacio: boolean = false;
  modoVista: boolean = true;
  modoEdicion: boolean = false;
  embarcacionSeleccionada: any = { datos_tecnicos: '' };
  data: any;
  formulario!: FormGroup;
  imagenSeleccionada: string | ArrayBuffer | null = null;
  // embarcacionVacia: any = { datos_tecnicos: '' };

  constructor(private sharedDataService: SharedDataService, private activatedRoute: ActivatedRoute, private apiService: ApiService, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.formulario = this.formBuilder.group({
      // Define tus campos aquí, por ejemplo:
      Matricula: ['', Validators.required],
      Manga: [''],
      Eslora: [''],
      Origen: [''],
      Titular: [''],
      Imagen: [''],
      Numero_Registro: [''],
      Datos_Tecnicos: [''],
      Modelo: [''],
      Nombre: [''],
      Tipo: [''],
      // Otros campos...
    });
  }

  onMostrarFormulario(tipo: string) {
    console.log("onMostrarFormulario:", tipo);
    if (tipo == 'vacio') {
      this.mostrarVacio = true;
    } else {
      this.mostrarVacio = false;
    }

  }
  mostrar: string = 'no';
  noMostrar: string = 'si';
  click: boolean = true;
  noClick: boolean = false;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const tipo = params['tipo'];
      this.mostrarVacio = tipo === 'vacio';
      // this.esNuevo = this.mostrarVacio;

      this.modoEdicion = !this.mostrarVacio;
    });

    console.log("Intentando obtener datos del servicio...");

    this.sharedDataService.getData("embarcacionSeleccionada").subscribe(data => {
      console.log("Datos obtenidos del servicio:", data);
      if (data) {
        // Solo asigna a embarcacionSeleccionada si no es un formulario vacío
        if (!this.mostrarVacio) {
          this.embarcacionSeleccionada = data;
          console.log("Información de la embarcación seleccionada:", this.embarcacionSeleccionada.matricula);
        }
      } else {
        console.warn("No se obtuvieron datos del servicio");
      }
    });

    // this.embarcacionVacia = { datos_tecnicos: '' };
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenSeleccionada = reader.result;
        console.log("Imagen seleccionada:", this.imagenSeleccionada);
      };
      reader.readAsDataURL(file);
    }
  }

  activarModoEdicion() {
    // this.modoEdicion = true;
    this.modoVista = false;
  }

  guardarEmbarcacion() {
    console.log('Guardando embarcación:', this.embarcacionSeleccionada);
    const formulario = document.forms.namedItem("formEmbarcacion") as HTMLFormElement;
    // Accede a los valores del formulario usando document.forms['nombreFormulario']['nombreCampo']
    const nombreValue = formulario['Nombre'].value as HTMLInputElement;
    const matriculaValue = formulario['Matricula'].value as HTMLInputElement;
    const mangaValue = formulario['Manga'].value as HTMLInputElement;
    const esloraValue = formulario['Eslora'].value as HTMLInputElement;
    const origenValue = formulario['Origen'].value as HTMLInputElement;
    const titularValue = formulario['Titular'].value as HTMLInputElement;
    const imagenValue = formulario['Imagen'].value as HTMLInputElement;
    const numeroRegistroValue = formulario['Registro'].value as HTMLInputElement;
    const datosTecnicosValue = formulario['Datos_Tecnicos'].value as HTMLInputElement;
    const modeloValue = formulario['Modelo'].value as HTMLInputElement;
    const tipoValue = formulario['Tipo'].value as HTMLInputElement;
    this.embarcacionSeleccionada = {
      Nombre: nombreValue,
      Matricula: matriculaValue,
      Manga: mangaValue,
      Eslora: esloraValue,
      Origen: origenValue,
      Titular: titularValue,
      Imagen: imagenValue,
      Numero_Registro: numeroRegistroValue,
      Datos_Tecnicos: datosTecnicosValue,
      Modelo: modeloValue,
      Tipo: tipoValue
    };
    // ... y así sucesivamente para otros campos.

    this.apiService.add('embarcacion', this.embarcacionSeleccionada)
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
  }
  actualizarEmbarcacion() {

    this.apiService.update(this.embarcacionSeleccionada.id, 'embarcacion', this.embarcacionSeleccionada)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud:', error);
          // Puedes manejar el error según tus necesidades
          throw error; // Propagar el error después de manejarlo
        })
      )
      .subscribe(
        response => {
          console.log('Respuesta del servicio en el componente:', response);
          // this.formulario.reset();
          this.embarcacionSeleccionada = {};
        },
        error => {
          console.error('Error en la solicitud:', error);
        }
      );
  }
  eliminarEmbarcacion() {
    this.apiService.delete(this.embarcacionSeleccionada.id, 'embarcacion')
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud:', error);
          throw error;
        })
      )
      .subscribe(
        response => {
          console.log('Respuesta del servicio en el componente:', response);
          this.embarcacionSeleccionada = {};
        },
        error => {
          console.error('Error en la solicitud:', error);
        }
      );
  }

  eliminar(): void {
    const dialogRef = this.dialog.open(FormdialogoemComponent, {
      data: {
        matricula: this.embarcacionSeleccionada.matricula,



      } as DialogoFormem
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        console.log('Eliminación confirmada. Causa de baja:', result.causa);
      } else {

        console.log('Eliminación cancelada.');
      }
    });
  }

}



