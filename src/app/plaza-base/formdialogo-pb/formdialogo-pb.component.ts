import { Component ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogoFormpb } from '../dialogo-formpb';

@Component({
  selector: 'app-formdialogo-pb',
  templateUrl: './formdialogo-pb.component.html',
  styleUrls: ['./formdialogo-pb.component.css']
})
export class FormdialogoPbComponent {
  formData: DialogoFormpb;

  constructor(
    public dialogRef: MatDialogRef<FormdialogoPbComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogoFormpb 
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
