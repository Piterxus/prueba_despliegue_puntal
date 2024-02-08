import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { datos } from 'src/resources/datos';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
// import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  datos = datos.embarcaciones;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedDataService: SharedDataService
  ) {
    console.log(this.datos);
  }
  navegarAFormulario() {
    // console.log("navegarAFormulario");
    // this.mostrarFormulario.emit();
  

    this.router.navigate(['../formulario'], { relativeTo: this.activatedRoute, queryParams: { tipo: 'vacio' } })
  }


  someClickHandler(index: number): void {
    const rowData = this.datos[index];
    this.sharedDataService.setData('embarcacionSeleccionada', rowData);
    this.router.navigate(['/embarcaciones/formulario'], {
      queryParams: { tipo: 'vista' }, // O 'vacio' según tus necesidades
    }); // Si no es con ruta abosulta, no funciona
    // this.router.navigate(['../formulario'], { relativeTo: this.activatedRoute.parent });
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json',
      },
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;

        $('td', row).off('click');
        $('td', row).on('click', () => {
          self.someClickHandler(index);
        });
        return row;
      },
    };
  }
}

    

