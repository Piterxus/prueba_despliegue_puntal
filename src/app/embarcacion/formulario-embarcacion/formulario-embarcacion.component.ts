import { Component, OnInit } from '@angular/core'; // Importación de módulo necesario para la definición de componentes
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service'; // Importación de servicio SharedDataService
import { ActivatedRoute } from '@angular/router'; // Importación de módulo necesario para el manejo de rutas
import { MatDialog } from '@angular/material/dialog'; // Importación de módulo necesario para la creación de diálogos
import { DialogoFormem } from '../dialogo-formem'; // Importación de interfaz DialogoFormem
import { FormBuilder } from '@angular/forms'; // Importación de módulo necesario para el manejo de formularios reactivos
import { FormdialogoemComponent } from '../formdialogoem/formdialogoem.component'; // Importación de componente FormdialogoemComponent
import { ApiService } from 'src/app/services/api/api.service'; // Importación de servicio ApiService
import { catchError } from 'rxjs'; // Importación de módulo necesario para el manejo de errores
import { Router } from '@angular/router'; // Importación de módulo necesario para el manejo de rutas

@Component({
  selector: 'app-formulario-embarcacion',
  templateUrl: './formulario-embarcacion.component.html',
  styleUrls: ['./formulario-embarcacion.component.css']
})

// Clase del componente FormularioEmbarcacionComponent
export class FormularioEmbarcacionComponent implements OnInit {
  mostrarVacio: boolean = false; // Variable para mostrar formulario vacío
  modoVista: boolean = true; // Variable para modo de vista de formulario
  modoEdicion: boolean = false; // Variable para modo de edición de formulario
  embarcacionSeleccionada: any = { datos_tecnicos: '' }; // Variable para almacenar la embarcación seleccionada. Se inicializa con un objeto vacío
  data: any; // Variable para almacenar datos

  imagenSeleccionada: string | File | ArrayBuffer | null = null; // Variable para almacenar la imagen seleccionada

  // Método constructor para crear un objeto del componente
  constructor(private sharedDataService: SharedDataService, private activatedRoute: ActivatedRoute, private apiService: ApiService, private formBuilder: FormBuilder, public dialog: MatDialog, private router: Router) {}
  // Método para mostrar formulario
  onMostrarFormulario(tipo: string) {
    // Si el tipo es vacío, muestra el formulario vacío
    if (tipo == 'vacio') {
      this.mostrarVacio = true;
    } else {
      this.mostrarVacio = false;
    }

  }
  // Método para mostrar modal
  mostrar: string = 'no';
  noMostrar: string = 'si';
  click: boolean = true;
  noClick: boolean = false;
  // Método para inicializar el componente en la vista
  ngOnInit(): void {
    if (!this.embarcacionSeleccionada.Imagen) {
      this.embarcacionSeleccionada.Imagen = '/assets/img/embarcaciones/image-outline.svg';
    }
    // Suscripción a los parámetros de la ruta. Recibe el tipo de formulario a través de queryParams en la URL
    this.activatedRoute.queryParams.subscribe(params => {
      const tipo = params['tipo'];
      this.mostrarVacio = tipo === 'vacio';

    });


    // Suscripción a los datos compartidos. Recibe la embarcación seleccionada
    this.sharedDataService.getData("embarcacionSeleccionada").subscribe(data => {
     
      if (data) {
        // Solo asigna a embarcacionSeleccionada si no es un formulario vacío
        if (!this.mostrarVacio) {
          this.embarcacionSeleccionada = data;
          if (!this.embarcacionSeleccionada.Imagen) {
            this.embarcacionSeleccionada.Imagen = '/assets/img/embarcaciones/image-outline.svg';
          }

        }
      } else {
        console.warn("No se obtuvieron datos del servicio");
      }
    });


  }

  // Método para seleccionar archivo de imagen y mostrarla en el formulario
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenSeleccionada = reader.result;
      
      };
      reader.readAsDataURL(file);
    }
  }
  // Método para actualizar archivo de imagen
  onFileUpdated(event: any) {
    this.imagenSeleccionada = event.target.files[0];
  
  }

  // Método para activar modo de edición de formulario
  activarModoEdicion() {

    this.modoVista = false;
    this.modoEdicion = true;
  }


  // Método guardar embarcación
  guardarEmbarcacion() {
    
    // Referencia al formulario
    const formulario = document.forms.namedItem("formEmbarcacion") as HTMLFormElement; 
    const formData = new FormData(); // Crea un objeto FormData para enviar los datos al servidor

    // Accede a los valores del formulario y agrégalos al objeto FormData
    formData.append('Nombre', formulario['Nombre'].value);
    formData.append('Matricula', formulario['Matricula'].value);
    formData.append('Manga', formulario['Manga'].value);
    formData.append('Eslora', formulario['Eslora'].value);
    formData.append('Origen', formulario['Origen'].value);
    formData.append('Titular', formulario['Titular'].value);
    formData.append('Numero_registro', formulario['Numero_registro'].value);
    formData.append('Datos_Tecnicos', formulario['Datos_Tecnicos'].value);
    formData.append('Modelo', formulario['Modelo'].value);
    formData.append('Tipo', formulario['Tipo'].value);

    // Agrega la imagen seleccionada al objeto FormData
    const imagenInput = formulario['Imagen'] as HTMLInputElement;
    if (imagenInput && imagenInput.files && imagenInput.files.length > 0) {
      const file = imagenInput.files[0];
      formData.append('Imagen', file);
    }

    // Envía los datos al servidor utilizando el servicio API
    this.apiService.add('embarcacion', formData)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud:', error);
          console.log('Mensaje de error:', error.error);
          throw error;
        })
      )
      .subscribe(
        response => {
          this.router.navigate(['/embarcaciones']);
          
        }
      );
  }

  // Método para actualizar embarcación
  actualizarEmbarcacion() {
    // Maneja la actualización de la imagen
    if (this.imagenSeleccionada) {

      this.embarcacionSeleccionada.Imagen = this.imagenSeleccionada;
    }
    // Envía los datos al servidor utilizando el servicio API
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
       
         
          this.embarcacionSeleccionada = {};
          this.router.navigate(['/embarcaciones']);
        },
        error => {
          console.error('Error en la solicitud:', error);
        }
      );
  }



  // Método para eliminar embarcación desde el modal
  eliminar(): void {
    const dialogRef = this.dialog.open(FormdialogoemComponent, {
      data: {
        matricula: this.embarcacionSeleccionada.Matricula,



      } as DialogoFormem
    });

    dialogRef.afterClosed().subscribe(result => {
    
      if (result.causa) {
        this.apiService.deleteEntityWithCause(this.embarcacionSeleccionada.id, 'embarcacion', result.causa)
          .pipe(
            catchError(error => {
              console.error('Error en la solicitud:', error);
              throw error;
            })
          )
          .subscribe(
            response => {
            
              this.embarcacionSeleccionada = {};
              this.router.navigate(['/embarcaciones']);

            },
            error => {
              console.error('Error en la solicitud:', error);
            }
          );
        console.log('Eliminación confirmada. Causa de baja:', result.causa);
      } else {

        console.log('Eliminación cancelada.');
      }
    });
  }

}




