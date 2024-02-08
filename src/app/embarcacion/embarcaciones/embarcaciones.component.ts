import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-embarcaciones',
  templateUrl: './embarcaciones.component.html',
  styleUrls: ['./embarcaciones.component.css']
})
export class EmbarcacionesComponent {
// mostrarTabla = true;

  constructor(private route: ActivatedRoute) {}

  // mostrarFormulario() {
  //   this.mostrarTabla = false;
  // }


}
