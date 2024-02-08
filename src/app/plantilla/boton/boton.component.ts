import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent {
  @Input() label: string = ' ';
  @Input() route: string = '/';
  @Input() claseDesbloqueado: string = 'botonA';
  @Input() claseBloqueado: string = 'botonB';
  @Input() imageUrlDesbloqueado: string | undefined;
  @Input() imageUrlBloqueado: string | undefined;
  @Input() bloqueado: boolean = false;

  constructor(private router: Router) {}

  navigate(): void {
    if (!this.bloqueado) {
      this.bloqueado = true;
      this.router.navigate([this.route]);
    }
  }
}
