import { Component, OnInit } from '@angular/core'; // Importación de módulo necesario para la definición de componentes
import { Router, ActivatedRoute } from '@angular/router'; // Importación de módulos necesarios para el manejo de rutas
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service'; // Importación de servicio SharedDataService
import { HttpClient } from '@angular/common/http'; // Importación de módulo necesario para el manejo de solicitudes HTTP
import { ApiService } from 'src/app/services/api/api.service'; // Importación de servicio ApiService
import { Subject } from 'rxjs'; // Importación de módulo necesario para el manejo de observables


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
// Clase del componente TablaComponent
export class TablaComponent implements OnInit {

  // Métodos dataTables para la configuración de la tabla
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  // Variable para almacenar datos
  datos: any = [];
  // Método constructor para crear un objeto del componente
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedDataService: SharedDataService,
    private apiService: ApiService,
    private http: HttpClient
  ) {

  }
  // Método para navegar a formulario
  navegarAFormulario() {


    this.router.navigate(['../formulario'], { relativeTo: this.activatedRoute, queryParams: { tipo: 'vacio' } })
  }


  // Método para manejar clics en las filas de la tabla
  someClickHandler(index: number): void {
    // Obtiene los datos de la fila seleccionada
    const rowData = this.datos[index];
    // Navega a formulario vista con los datos de la fila seleccionada
    this.sharedDataService.setData("embarcacionSeleccionada", rowData);
    this.router.navigate(['/embarcaciones/formulario'], {
      queryParams: { tipo: 'vista' }  // O 'vacio' según tus necesidades
    }); // Si no es con ruta abosulta, no funciona

  }

  // Método para inicializar el componente en la vista (obtiene todos los datos de la entidad embarcación)
  ngOnInit(): void {
    this.apiService.getAll('embarcacion').subscribe((data: any) => {
      this.datos = data;

      console.log('Después de la llamada a la API:', this.datos);
      this.dtTrigger.next(data);
      // Notificar a DataTables después de obtener los datos

    });
    // Configuración de DataTables
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },

    };



  }
  // Método para destruir en el componente
  ngOnDestroy(): void {
    // Limpia el dtTrigger para evitar problemas de memoria
    this.dtTrigger.unsubscribe();
  }
}



