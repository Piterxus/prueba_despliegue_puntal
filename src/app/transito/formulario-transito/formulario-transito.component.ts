
import { Component, OnInit, ChangeDetectorRef, NgZone, ViewChild } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormdialogoComponent } from '../formdialogo/formdialogo.component';
import { DilogoForm } from '../dilogo-form';
import { TablaTripulanteComponent } from '../tabla-tripulante/tabla-tripulante.component';
import { ApiService } from 'src/app/services/api/api.service';
import { catchError } from 'rxjs';
import { error } from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-transito',
  templateUrl: './formulario-transito.component.html',
  styleUrls: ['./formulario-transito.component.css'],
})
export class FormularioTransitoComponent implements OnInit {
  @ViewChild(TablaTripulanteComponent) tripulante!:TablaTripulanteComponent;
  mostrarVacio: boolean = false;
  modoVista: boolean = true;
  modoEdicion: boolean = false;
  transitoSeleccionada: any = { datos_tecnicos: '' };
  imagenSeleccionada: string | ArrayBuffer | null = null;
  datos:any ; amarre:any; pantalan:any;instalacion:any;
  // transitoVacia: any = { datos_tecnicos: '' };

   instalaciones: any[] = [];
  pantalanes: any[] = [];
  amarres: any[] = [];
  embarcaciones: any[] = [];
  selectedEmbarcacion: any;
  selectedInstalacion: any;
  selectedPantalan: any;
  selectedAmarre: any;
  mostrar :string ='no';
  noMostrar :string='si';
  click:boolean=true;
  noClick:boolean=false;
  formulario!: FormGroup;
  constructor(
    private sharedDataService: SharedDataService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    public dialog: MatDialog,
    private apiService: ApiService ,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      // Define tus campos aquí, por ejemplo:
      fecha_entrada: ['', Validators.required],
      fecha_salida: [''],
      embarcacion: [''],
      instalacion: [''],
      pantalan: [''],
      amarre: [''],
      patron: [''],
      autorizaciones: [''],
      proposito: [''],
     
      // Otros campos...
    });
  }
  

  //conecta en formulario para llmaar a la edicion del formulario y llamar a la edicion del componente de tripulante
  activarModoEdicionTripulante() {
    if (this.tripulante) {
      this.tripulante.anyadirTripulante();
      this.activarModoEdicion();
    } else {
      console.error('Error: TablaTripulanteComponent no está disponible.');
    }
  }
  // onMostrarFormulario(tipo: string) {
  //   console.log("onMostrarFormulario");
  //   this.mostrarVacio = tipo === 'vacio';
  //   this.esNuevo = this.mostrarVacio;
  //   this.modoEdicion = !this.mostrarVacio;
  //   this.modoVista = !this.modoEdicion;
  //   // Si es un formulario vacío, inicializa transitoSeleccionada con el objeto vacío
  //   if (this.mostrarVacio) {
  //     this.transitoSeleccionada = { datos_tecnicos: '' };
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
    this.apiService.getEmbarcaciones().subscribe((data: any) => {
      this.datos = data;
      console.log('Después de la llamada a la API:', this.datos);
  
  
       });
       this.apiService.getPlazas().subscribe((data: any) => {
        this.amarre = data;
        console.log('Después de la llamada a la API:', this.amarre);
    
    
         });
         this.apiService.getAll('pantalan').subscribe((data: any) => {
          this.pantalan = data;
          console.log('Después de la llamada a la API:', this.pantalan);
      
      
           });
           this.apiService.getAll('instalacion').subscribe((data: any) => {
            this.instalacion = data;
            console.log('Después de la llamada a la API:', this.instalacion);
        
        
             });
    this.activatedRoute.queryParams.subscribe((params) => {
      const tipo = params['tipo'];
      this.mostrarVacio = tipo === 'vacio';
      // this.esNuevo = this.mostrarVacio;

      this.modoEdicion = !this.mostrarVacio;
    });

    console.log('Intentando obtener datos del servicio...');

    this.sharedDataService.getData('transitoSeleccionada').subscribe((data) => {
      console.log('Datos obtenidos del servicio:', data);
      if (data) {
        // Solo asigna a transitoSeleccionada si no es un formulario vacío
        if (!this.mostrarVacio) {
          this.transitoSeleccionada = data;
          console.log(
            'Información del  transito seleccionado:',
            this.transitoSeleccionada
          );
        }
      } else {
        console.warn('No se obtuvieron datos del servicio');
      }
    });

    // this.transitoVacia = { datos_tecnicos: '' };
  }

  onChangeInstalacion() {
    this.apiService.getPantalanes(this.selectedInstalacion).subscribe(pantalanes => {
      this.pantalan = pantalanes;
    });
  }
  
  onChangePantalan() {
    this.apiService.getAmarresTransito(this.selectedPantalan).subscribe(amarres => {
      this.amarre = amarres;
    });
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenSeleccionada = reader.result;
        console.log('Imagen seleccionada:', this.imagenSeleccionada);
      };
      reader.readAsDataURL(file);
    }
  }
  

  activarModoEdicion() {
    // this.modoEdicion = true;
    this.modoVista = false;
  }
  eliminar(): void {
    const dialogRef = this.dialog.open(FormdialogoComponent, {
      data: {
        embarcacion: this.transitoSeleccionada.embarcacion,
        patron: this.transitoSeleccionada.patron,
        instalacion: this.transitoSeleccionada.instalacion,
        pantalan: this.transitoSeleccionada.pantalan
       
      } as DilogoForm
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       
        console.log('Eliminación confirmada. Causa de baja:', result.causa);
      } else {
        
        console.log('Eliminación cancelada.');
      }
    });
}


guardarTransito() {
  
  
  const formulario = document.forms.namedItem("formTransito") as HTMLFormElement;
  // Accede a los valores del formulario usando document.forms['nombreFormulario']['nombreCampo']
  const FechaEntradaValue = formulario['fecha_entrada'].value as HTMLInputElement;
  console.log('Fecha de entrada:', FechaEntradaValue);

  const FechaSalidaValue = formulario['fecha_salida'].value as HTMLInputElement;
  console.log('Fecha de salida:', FechaSalidaValue);

  const EmbarcacionValue = formulario['embarcacion'].value as HTMLInputElement;
  console.log('Embarcación:', EmbarcacionValue);

  const InstalacionValue = formulario['instalacion'].value as HTMLInputElement;
  console.log('Instalación:', InstalacionValue);

  const PantalanValue = formulario['pantalan'].value as HTMLInputElement;
  console.log('Pantalán:', PantalanValue);

  const AmarreValue = formulario['amarre'].value as HTMLInputElement;
  console.log('Amarre:', AmarreValue);
  this.transitoSeleccionada = {
    FechaEntrada: FechaEntradaValue,
    FechaSalida: FechaSalidaValue,
    Embarcacion: EmbarcacionValue,
    Instalacion: InstalacionValue,
    Pantalan: PantalanValue,
    Amarre: AmarreValue,
   
    
  };
  // ... y así sucesivamente para otros campos.

  this.apiService.add('transito', this.transitoSeleccionada)
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
actualizarTransito() {

  this.apiService.update(this.transitoSeleccionada.id, 'transito', this.transitoSeleccionada)
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
        this.transitoSeleccionada = {};
      },
      error => {
        console.error('Error en la solicitud:', error);
      }
    );
}
eliminarTransito() {
  this.apiService.delete(this.transitoSeleccionada.id, 'transito')
    .pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        throw error;
      })
    )
    .subscribe(
      response => {
        console.log('Respuesta del servicio en el componente:', response);
        this.transitoSeleccionada = {};
      },
      error => {
        console.error('Error en la solicitud:', error);
      }
    );
}




}
