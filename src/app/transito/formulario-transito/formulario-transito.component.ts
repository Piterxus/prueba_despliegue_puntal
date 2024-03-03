
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
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';





@Component({
  selector: 'app-formulario-transito',
  templateUrl: './formulario-transito.component.html',
  styleUrls: ['./formulario-transito.component.css'],
})
export class FormularioTransitoComponent implements OnInit {
  @ViewChild(TablaTripulanteComponent) tripulante!:TablaTripulanteComponent;

  mostrarError:boolean=false;
  mostrarVacio: boolean = false;
  modoVista: boolean = true;
  modoEdicion: boolean = false;
  transitoSeleccionada: any = { datos_tecnicos: '' };
  imagenSeleccionada: string | ArrayBuffer | null = null;
  datos:any ; amarre:any; pantalan:any;instalacion:any; idTransito:any;
  // transitoVacia: any = { datos_tecnicos: '' };
  idLocalStorage: any;
  titular: string= '';
   instalaciones: any[] = [];
  pantalanes: any[] = [];
  amarres: any[] = [];
  embarcaciones: any[] = [];
  data: any;
  fechaVerificada =false;
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
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router :Router,
  ) {
    this.idLocalStorage = localStorage.getItem('id');



    // Additional initialization can be done here if needed


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


  //conecta en formulario para llamaar a la edicion del formulario y llamar a la edicion del componente de tripulante
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


//hace todas las llamadas a las apis y lo carga en unas variables
  ngOnInit(): void {

    this.apiService.getEmbarcaciones().subscribe((data: any) => {
      this.datos = data;
      console.log('Después de la llamada a la API:', this.datos);


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

  verificarFecha()
  {

  }
  //hace que al cambiar de estado el select llame a la api y coja titular
  onChangeEmbarcacion() {
 
    this.embarcaciones.find(embarcacion => embarcacion.id === this.selectedEmbarcacion);
    
      if (this.selectedEmbarcacion) {
      
        this.apiService.getTitularEmbarcacion(this.selectedEmbarcacion).subscribe(
         
          (response: any) => {
            console.log(response)
            console.log( this.selectedEmbarcacion)
            this.titular = response.titular;
            console.log( this.titular)
          },
          (error) => {
            console.error('Error al obtener el titular de la embarcación:', error);
            this.titular = ''; // Establecer el titular como vacío en caso de error
          }
        );
      } else {
        this.titular = ''; // Establecer el titular como vacío si no se encuentra la embarcación seleccionada
      }
    }
  
//hace que al cambiar de estado el select llame a la api y coja pantalanes
  onChangeInstalacion() {
    this.apiService.getPantalanes(this.selectedInstalacion).subscribe(pantalanes => {
      this.pantalan = pantalanes;
    });
  }
  //hace que al cambiar de estado el select llame a la api y coja amarres

  onChangePantalan() {
    this.apiService.getAmarresTransito(this.selectedPantalan).subscribe(amarres => {
      this.amarre = amarres;
    });
  }
  // onFileSelected(event: any): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imagenSeleccionada = reader.result;
  //       console.log('Imagen seleccionada:', this.imagenSeleccionada);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

//pone el modo vista en falso y permite modificar
  activarModoEdicion() {
    this.modoVista = false;
  }

  //salta el dialogo para confirmar la eliminación

eliminar(): Observable<boolean> {
  const dialogRef = this.dialog.open(FormdialogoComponent, {
    data: {
      embarcacion: this.transitoSeleccionada.Matricula,
      amarre: this.transitoSeleccionada.Numero,
    } as DilogoForm
  });

  return dialogRef.afterClosed().pipe(
    map(result => !!result) // Convertir el resultado en un booleano
  );
}



verificarFechas(): boolean {
  const formulario = document.forms.namedItem("formTransito") as HTMLFormElement;
  // Obtenemos los valores de las fechas del formulario
  const fechaEntrada = formulario['fecha_entrada'].value as HTMLInputElement;
  const fechaSalida = formulario['fecha_salida'].value as HTMLInputElement;
  // Verificamos si la fecha de entrada es posterior a la fecha de salida
  if (fechaEntrada > fechaSalida) {
    this.mostrarError = true;
    return false;
  }
  // Si todas las validaciones pasan, devuelve true
  return true;
}
verificarFechasEdit(): boolean {

  if (this.transitoSeleccionada.FechaEntrada > this.transitoSeleccionada.FechaSalida) {
    this.mostrarError = true;

    return false;
  }
  // Si todas las validaciones pasan, devuelve true
  return true;
}



//crea un nuevo transito cogiendo de el formulario los values de cada campo y insertandolos en un transito para luego añadirlo con la api
guardarTransito() {
  const Administrativo_id = (document.getElementById('campoOculto') as HTMLInputElement).value;


  if(this.verificarFechas())
  {

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

  const TitularValue= formulario['titular'].value as HTMLInputElement;
  console.log('titular:', TitularValue);
  this.transitoSeleccionada = {
    FechaEntrada: FechaEntradaValue,
    FechaSalida: FechaSalidaValue,
    Embarcacion: EmbarcacionValue,
    Instalacion: InstalacionValue,
    Pantalan: PantalanValue,
    Amarre: AmarreValue,
    Titular:TitularValue,
   
    

  };
  this.apiService.idTransito(this.transitoSeleccionada.Amarre).pipe(
    switchMap((transitoId) => {
        console.log('ID de transito obtenido:', transitoId);
        this.idTransito= transitoId;
        // Realizar la siguiente operación aquí, utilizando el transitoId obtenido

        // Por ejemplo, puedes usarlo para llamar a la función que crea el transito
        return this.apiService.crearTransito(this.transitoSeleccionada);
    }),
    switchMap((response) => {
        // Realizar la siguiente operación aquí, utilizando el resultado de la creación del transito
        console.log('Respuesta de la creación del transito:', response);

        // Por ejemplo, puedes usarlo para llamar a la función que actualiza el estado de disponibilidad
        return this.apiService.putDisponibleOcupado(this.transitoSeleccionada.Amarre);
    }),
    switchMap((response) => {
        // Realizar aquí la llamada para guardar los tripulantes
        this.tripulante.guardarTripulante(this.idTransito);
        
        // Devolver un observable vacío ya que no necesitamos continuar después de guardar los tripulantes
        return this.router.navigate(['transito/tabla']);
    })
).subscribe(
    (response) => {
        console.log('Operaciones completadas:', response);
        // Aquí puedes manejar la respuesta de la operación final
    },
    (error) => {
        console.error('Error:', error);
        // Aquí puedes manejar cualquier error que ocurra en el proceso
    }
);
  
  }

}
//hace un update de los datos de el formulario transitos
actualizarTransito() {
  if(this.verificarFechasEdit())
  {
   
  this.apiService.updateTransito(this.transitoSeleccionada.IdAlquiler, this.transitoSeleccionada)
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
    
    this.router.navigate(['transito/tabla'])
  }
  this.tripulante.editarTripulante();
}
//hace un cambio del estado de plaza a ocupado
eliminarTransito() {
  this.eliminar().pipe(
    switchMap(confirmado => {
      console.log(confirmado + "esto");
      if (confirmado) {
        return this.apiService.putOcupadoDisponible(this.transitoSeleccionada.Transito,this.transitoSeleccionada).pipe(
          switchMap(() => this.apiService.deleteCrew(this.transitoSeleccionada.id )),
          catchError(error => {
            console.error('Error en la solicitud:', error);
            throw error;
          })
        );
      } else {
        console.log('Eliminación cancelada.');
        return of(null); // Retorna un observable de nulo si la eliminación es cancelada
      }
    })
  ).subscribe(
    response => {
      if (response) {
        this.router.navigate(['/transito/tabla']);  
        console.log('Respuesta del servicio en el componente:', response);
        this.transitoSeleccionada = {};
      }
    },
    error => {
      console.error('Error en la solicitud:', error);
    }
  );


  
}




}
