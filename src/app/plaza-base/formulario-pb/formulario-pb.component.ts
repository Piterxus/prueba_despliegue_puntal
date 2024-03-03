import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormdialogoPbComponent } from '../formdialogo-pb/formdialogo-pb.component';
import { DialogoFormpb } from '../dialogo-formpb';
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-formulario-pb',
  templateUrl: './formulario-pb.component.html',
  styleUrls: ['./formulario-pb.component.css'],
})
export class FormularioPbComponent implements OnInit {
  mostrarVacio: boolean = false;
  modoVista: boolean = true;
  modoEdicion: boolean = false;
  editarFechaFinalizacion: boolean = false;


  plazaBSeleccionada: any = {    };
  idLocalStorage: any;
  data: any;
  formulario!: FormGroup;

  instalaciones: any[] = [];
  pantalanes: any[] = [];
  amarres: any[] = [];
  embarcaciones: any[] = [];

  selectedEmbarcacion: any;
  selectedInstalacion: any;
  selectedPantalan: any;
  selectedAmarre: any;
  FechaInicio: Date;
  FechaFinalizacion: Date;
  titular: string = '';
  minDate: string | null = null;
  minDateActualizada: string | null = null;

  constructor(
    private sharedDataService: SharedDataService,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router

  ) {
    this.FechaInicio = new Date();
    this.idLocalStorage = localStorage.getItem('id');
    this.FechaFinalizacion = new Date();
    // this.FechaFinalizacion.setMonth(this.FechaInicio.getMonth() + 6);
  }
  onChangeFechaInicio(): void {

  }

  onChangeInstalacion() {
    this.apiService.getPantalanes(this.selectedInstalacion).subscribe(pantalanes => {
      this.pantalanes = pantalanes;
    });
  }

  onChangePantalan() {
    this.apiService.getAmarres(this.selectedPantalan).subscribe(amarres => {
      this.amarres = amarres;
    });

  }
  onChangeEmbarcacion() {

    this.embarcaciones.find(embarcacion => embarcacion.id === this.selectedEmbarcacion);

    if (this.selectedEmbarcacion) {
      console.log(this.selectedEmbarcacion)
      this.apiService.getTitularEmbarcacion(this.selectedEmbarcacion).subscribe(

        (response: any) => {
          console.log(response)
          console.log(this.selectedEmbarcacion)
          this.titular = response.titular;
          console.log(this.titular)
        },
        (error) => {
          console.error('Error al obtener el titular de la embarcación:', error);
          this.titular = ''; 
        }
      );
    } else {
      this.titular = ''; 
    }
  }
  validarFechaFinalizacion() {
    if (this.FechaInicio) {
      const fechaInicio = new Date(this.FechaInicio);
      fechaInicio.setMonth(fechaInicio.getMonth() + 6); // Añadir 6 meses a la fecha de inicio
      this.minDate = fechaInicio.toISOString().split('T')[0]; // Convertir la fecha a un formato de cadena compatible con el atributo 'min'
    } else {
      this.minDate = null;
    }
    
    if (this.plazaBSeleccionada.FechaInicio) {
      const fechaInicio = new Date(this.plazaBSeleccionada.FechaInicio);
      fechaInicio.setMonth(fechaInicio.getMonth() + 6); // Añadir 6 meses a la fecha de inicio
      this.minDateActualizada = fechaInicio.toISOString().split('T')[0]; // Convertir la fecha a un formato de cadena compatible con el atributo 'min'
    }else{
      this.minDateActualizada = null;
    }

    
  }
  guardarPlazaBase() {
    var Administrativo_id = (document.getElementById('campoOculto') as HTMLInputElement).value;

    var formulario = document.forms.namedItem("formPlazabase") as HTMLFormElement;
    var formData = new FormData();

    formData.append('FechaInicio', formulario['FechaInicio'].value);
    formData.append('FechaFinalizacion', formulario['FechaFinalizacion'].value);
    formData.append('Instalacion', formulario['Instalacion'].value);
    formData.append('Pantalan', formulario['Pantalan'].value);
    formData.append('Amarre', formulario['Amarre'].value);
    formData.append('Embarcacion', formulario['Embarcacion'].value);
    formData.append('Titular', formulario['Titular'].value);
    formData.append('Administrativo_id', Administrativo_id);
    console.log(formData);

    var idAmarre = formData.get('Amarre');

    console.log(idAmarre);

    this.apiService.postAlquiler(idAmarre, formData).pipe(
      switchMap((response) => {
        console.log('Alquiler?:', response);

        return this.apiService.postAdministrativoAmarre(idAmarre, formData);
      }),
      switchMap((response) => {
        console.log('Administrativo asociado correctamente al amarre:', response);

        return this.apiService.putDisponibleOcupado(idAmarre);
      })
    ).subscribe(
      (response) => {
        console.log('Cambiado:', response);
        this.router.navigate(['/plazabase/tabla']);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

  }

  actualizaPB() {


    this.apiService.putActuaFin(this.plazaBSeleccionada.Plaza, this.plazaBSeleccionada).pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        throw error;
      })
    )
      .subscribe(
        response => {

          this.plazaBSeleccionada = {};
          this.router.navigate(['/plazabase']);
        },
        error => {
          console.error('Error en la solicitud:', error);
        }
      );


  }


  ngOnInit(): void {
    this.validarFechaFinalizacion();
    this.apiService.getInstalaciones().subscribe(instalaciones => {
      this.instalaciones = instalaciones;
    });

    this.apiService.getEmbarcaciones().subscribe(embarcaciones => {
      this.embarcaciones = embarcaciones;
      console.log(embarcaciones);
    });
    this.validarFechaFinalizacion();

    this.activatedRoute.queryParams.subscribe((params) => {
      const tipo = params['tipo'];
      this.mostrarVacio = tipo === 'vacio';

    });

    console.log('Intentando obtener datos del servicio...');

    this.sharedDataService.getData('plazaBSeleccionada').subscribe((data) => {
 
      if (data) {
        if (!this.mostrarVacio) {
          this.plazaBSeleccionada = data;
          this.validarFechaFinalizacion();
          console.log(
            'Información de la embarcación seleccionada:',
            this.plazaBSeleccionada.Titular,
            this.plazaBSeleccionada.FechaInicio,
          );
        }
      } else {
        console.warn('No se obtuvieron datos del servicio');
      }
    });
  }


  activarModoEdicion() {
    this.modoVista = false;
    this.editarFechaFinalizacion = true;
    this.modoEdicion = true;
  }
  eliminar(): void {
    const dialogRef = this.dialog.open(FormdialogoPbComponent, {
      data: {
        embarcacion: this.plazaBSeleccionada.Matricula,
        instalacion: this.plazaBSeleccionada.Instalacion,
        titular: this.plazaBSeleccionada.Titular,
        pantalan: this.plazaBSeleccionada.Pantalan,
      } as DialogoFormpb,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.apiService.putOcupadoDisponible(this.plazaBSeleccionada.Plaza)
          .pipe(
            catchError(error => {
              console.error('Error en la solicitud:', error);
              throw error;
            })
          )
          .subscribe(
            response => {

              this.plazaBSeleccionada = {};
              this.router.navigate(['/plazabase']);

            },
            error => {
              console.error('Error en la solicitud:', error);
            }
          );
       
      } else {

        console.log('Eliminación cancelada.');
      }
    });

  }
}
