import { Component, OnInit } from '@angular/core'; // Importación de módulo necesario para la definición de componentes
import { ApiService } from 'src/app/services/api/api.service'; // Importación de servicio ApiService
import { Subject } from 'rxjs'; // Importación de módulo necesario para el manejo de observables
import { HttpClient } from '@angular/common/http'; // Importación de módulo necesario para el manejo de solicitudes HTTP

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  // Métodos dataTables para la configuración de la tabla con dataTables
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  // Variable para almacenar datos
  datos: any = [];
  // Variables para el modal
  tituloModal: string = '';
  cuerpoModal: string = '';
  imagenModal: string = '';
  // Variable para almacenar el ítem seleccionado
  selectedItem: any;
  administrativoId: string | null = localStorage.getItem('id'); // Variable para almacenar el id del administrativo que realiza la gestión de incidencias
  // Método constructor para crear un objeto del componente
  constructor(private apiService: ApiService, private http: HttpClient) {

  }
  // Método para manejar clics en las filas de la tabla
  someClickHandler(index: number): void {
    const rowData = this.datos[index]; // Obtiene los datos de la fila seleccionada
    this.selectedItem = rowData; // Asigna los datos de la fila seleccionada a la variable selectedItem
    const modal = document.getElementById('myModal'); // Obtiene el modal
    // Si el modal existe, muestra el modal con los datos de la fila seleccionada
    if (modal) {
      modal.style.display = 'block';
      this.tituloModal = rowData.Titulo;
      this.cuerpoModal = rowData.Descripcion;
      this.imagenModal = rowData.Foto;
      

    }
   
  }
  // Método para cerrar el modal
  closeModal(): void {
    const modal = document.getElementById('myModal'); // Obtiene el modal
    // Si el modal existe, cierra el modal
    if (modal) {
      modal.style.display = 'none';
      
    }
  }
  // Método para marcar como leída una incidencia
  marcarLeido(id: string): void {
    // Realiza una petición HTTP PUT al servidor para marcar como leída la incidencia
    this.apiService.update(this.selectedItem.id, 'incidencia', { Leido: 1, Administrativo_id: this.administrativoId }).subscribe((data: any) => {
      // Si la petición es exitosa, cierra el modal y recarga la página
      this.closeModal();
      window.location.reload();
    });

  }
  // Método para eliminar una incidencia
  eliminarIncidencia(id: string): void {
    // Realiza una petición HTTP DELETE al servidor para eliminar la incidencia
    this.apiService.delete(this.selectedItem.id, 'incidencia')
      .subscribe(
        () => {
         
          this.closeModal();
          window.location.reload();

        },
        error => {
          console.error('Error al eliminar la incidencia:', error);
        }
      );
    
  }
  // Método para inicializar el componente en la vista (obtiene todos los datos de la entidad incidencia)
  ngOnInit(): void {
    this.apiService.getAll('incidencia').subscribe((data: any) => {
      this.datos = data;
      this.dtTrigger.next(data);
    });
    // Configuración de DataTables
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },

      responsive: true,

    }
  }
  // Método para destruir el componente


  ngOnDestroy(): void {
    // Desuscribirse de dtTrigger para evitar problemas de memoria
    this.dtTrigger.unsubscribe();
  }
}
