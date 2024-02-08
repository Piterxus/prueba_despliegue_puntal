import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { ActivatedRoute } from '@angular/router';

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
  imagenSeleccionada: string | ArrayBuffer | null = null;
  // embarcacionVacia: any = { datos_tecnicos: '' };

  constructor(private sharedDataService: SharedDataService, private activatedRoute: ActivatedRoute, private cdr: ChangeDetectorRef, private ngZone: NgZone) { }

  // onMostrarFormulario(tipo: string) {
  //   console.log("onMostrarFormulario");
  //   this.mostrarVacio = tipo === 'vacio';
  //   this.esNuevo = this.mostrarVacio;
  //   this.modoEdicion = !this.mostrarVacio;
  //   this.modoVista = !this.modoEdicion;
  //   // Si es un formulario vacío, inicializa embarcacionSeleccionada con el objeto vacío
  //   if (this.mostrarVacio) {
  //     this.embarcacionSeleccionada = { datos_tecnicos: '' };
  //   }

  //   // Configura el modoVista en función del estado actual
  //   this.modoVista = !this.mostrarVacio && !this.modoEdicion;

  //   // Si es un formulario vacío, forzar modoVista a ser falso para que sea editable
  //   if (this.mostrarVacio || this.modoEdicion) {
  //     this.modoVista = false;
  //   }
  //   this.ngZone.run(() => {
  //     this.cdr.detectChanges();
  //   });
  // }


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

  onFileSelected(event: any) :void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload =  () =>{
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
}



