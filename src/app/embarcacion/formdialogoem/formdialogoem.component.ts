import { Component, Inject } from '@angular/core'; // Importar Inject
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Importar MatDialogRef, MAT_DIALOG_DATA
import { DialogoFormem } from '../dialogo-formem'; // Importar DialogoFormem

@Component({
  selector: 'app-formdialogoem',
  templateUrl: './formdialogoem.component.html',
  styleUrls: ['./formdialogoem.component.css']
})
export class FormdialogoemComponent {
  // Añadir el atributo formData
  formData: DialogoFormem;

  // Añadir el constructor
  constructor(
    public dialogRef: MatDialogRef<FormdialogoemComponent>, // Añadir public
    @Inject(MAT_DIALOG_DATA) public data: DialogoFormem // Añadir @Inject(MAT_DIALOG_DATA) public data: DialogoFormem
  ) {
    this.formData = { ...data }; // Añadir this.formData = { ...data };
  }
  // Cerrar el diálogo
  onNoClick(): void {
    this.dialogRef.close();
  }

  // Enviar el formulario
  onSubmit(): void {
    if (!this.formData.causa) {
      alert("Debe ingresar una causa");
      return;
    }

    this.dialogRef.close(this.formData); // Cierra el diálogo y devuelve this.formData
  }
}
