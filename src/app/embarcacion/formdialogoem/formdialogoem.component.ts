import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogoFormem } from '../dialogo-formem';

@Component({
  selector: 'app-formdialogoem',
  templateUrl: './formdialogoem.component.html',
  styleUrls: ['./formdialogoem.component.css']
})
export class FormdialogoemComponent {
  formData: DialogoFormem;

  constructor(
    public dialogRef: MatDialogRef<FormdialogoemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogoFormem
  ) {
    this.formData = { ...data }; 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.formData);
  }
}
