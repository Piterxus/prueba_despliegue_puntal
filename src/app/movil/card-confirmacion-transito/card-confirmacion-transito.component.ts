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
    const formData = new FormData();
  
    // Agregar la imagen seleccionada al objeto FormData
    const imagenInput = document.getElementById('imgEmb') as HTMLInputElement;
    if (imagenInput && imagenInput.files && imagenInput.files.length > 0) {
      const file = imagenInput.files[0];
      formData.append('Imagen', file);
    } else {
      console.error('No se seleccionó ninguna imagen.');
      return; // No hay imagen para actualizar, salir de la función
    }


    this.apiService.updatePhoto(this.transito.embarcacion_id, formData)
      .subscribe(
        response => {
          console.log('Respuesta del servicio en el componente:', response);
          localStorage.setItem('transito', JSON.stringify(this.transito));
          window.location.reload();
        },
        error => {
          console.error('Error en la solicitud:', error);
        }
      );
  }
  

  confirmarLlegada() {
    console.log('Confirmando llegada del tránsito:', this.transito);
  
    // Actualiza el estado del tránsito en tu componente
    this.transito.Estatus = 'Salida';
    // Cambia la apariencia del botón
    // const boton = document.querySelector('.botonLlegada');
    // if (boton) {
    //   boton.textContent = 'CONFIRMAR SALIDA';
    //   boton.classList.remove('botonLlegada');
    //   boton.classList.add('botonSalida');
    // }
  
    // Crea el objeto con los datos a enviar
    const data = { estatus: 'Salida' };
  
    // Envía los datos al servidor utilizando el servicio API
    this.apiService.cambiarEstado(this.transito.id, data)
      .subscribe(
        response => {
          console.log('Respuesta del servicio en el componente:', response);
          // Actualiza los datos de tránsito en el local storage
          localStorage.setItem('transito', JSON.stringify(this.transito));
          setTimeout(() => window.location.reload(), 100);
        },
        error => {
          console.error('Error en la solicitud:', error);
        }
      );
  }

  confirmarSalida() {
    console.log('Confirmando salida del tránsito:', this.transito);

    // Llama al método delete del apiService para eliminar el tránsito
    this.apiService.delete(this.transito.id, 'transito')
        .subscribe(
            response => {
                console.log('Respuesta del servicio en el componente:', response);
                // Redirecciona a la página anterior
                this.router.navigate(['movil']);
            },
            error => {
                console.error('Error en la solicitud:', error);
            }
        );
}

  ngOnInit(): void {
    // Obtén los datos de tránsito del local storage al inicializar el componente
    this.transito = JSON.parse(localStorage.getItem('transito') || '{}');
  }
}