import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { HttpClient } from '@angular/common/http'; 
import { catchError } from 'rxjs';

@Component({
  selector: 'app-card-confirmacion-transito',
  templateUrl: './card-confirmacion-transito.component.html',
  styleUrls: ['./card-confirmacion-transito.component.css']
})
export class CardConfirmacionTransitoComponent implements OnInit {

  formulario: FormGroup;
  transito: any;
  imagenSeleccionada: string | File | ArrayBuffer | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient 
  ) {
    this.formulario = this.formBuilder.group({
      Imagen: ['']
    });
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

  guardarImagen() {
    // console.log('Guardando imagen de embarcación:', this.transito);
    // const formData = new FormData();
    alert (this.formulario.value.Imagen);
    // Agrega la imagen seleccionada al objeto FormData
    // const imagenInput = this.formulario.get('Imagen');
    // if (imagenInput && imagenInput.value) {
    //   formData.append('Imagen', imagenInput.value);
    // }

    // Envía los datos al servidor utilizando el servicio API
    this.apiService.update(this.transito.embarcacion_id, 'embarcacion', this.formulario.value) 
    .pipe(
        catchError(error => {
          console.error('Error en la solicitud:', error);
          throw error;
        })
      )
      .subscribe(
        response => {
          console.log('Respuesta del servicio en el componente:', response);
          // Guarda los datos de tránsito en el local storage
          localStorage.setItem('transito', JSON.stringify(this.transito));
          // Navega a la página de embarcaciones después de 1 segundo
          window.location.reload();
        },
        error => {
          console.error('Error en la solicitud:', error);
          
        }
      );
  }

  confirmarLlegada() {
    console.log('Confirmando llegada del tránsito:', this.transito);

    // Envía los datos al servidor utilizando HttpClient
    this.http.put<any>('http://127.0.0.1:8000/api/v1/transito/' + this.transito.id + '/cambiar-estado', { estatus: 'salida' })
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud:', error);
          throw error;
        })
      )
      .subscribe(
        response => {
          console.log('Respuesta del servicio en el componente:', response);
          // Actualiza el estado del tránsito en tu componente
          this.transito.Estatus = 'salida';
          // Cambia la apariencia del botón
          const boton = document.querySelector('.botonLlegada');
          if (boton) {
            boton.textContent = 'CONFIRMAR SALIDA';
            boton.classList.remove('botonLlegada');
            boton.classList.add('botonSalida');
          }
        },
        error => {
          console.error('Error al confirmar la llegada del tránsito:', error);
          
        }
      );
  }

  ngOnInit(): void {
    // Obtén los datos de tránsito del local storage al inicializar el componente
    this.transito = JSON.parse(localStorage.getItem('transito') || '{}');
  }
}