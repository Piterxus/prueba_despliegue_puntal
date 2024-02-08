import { Component , Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DilogoForm } from '../dilogo-form';


@Component({
  selector: 'app-formdialogo',
  templateUrl: './formdialogo.component.html',
  styleUrls: ['./formdialogo.component.css']
})
export class FormdialogoComponent {
  formData: DilogoForm;

  constructor(
    public dialogRef: MatDialogRef<FormdialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DilogoForm
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



