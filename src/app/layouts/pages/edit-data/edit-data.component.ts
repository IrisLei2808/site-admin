import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';
import { User } from '../tables/tables.component';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
  currentTutorial = null;
  constructor(
    public dialogRef: MatDialogRef<EditDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private apiService: ApiServiceService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  updateTutorial(): void {
    this.apiService.updateBrand(this.data.id, this.data)
      .subscribe(
        response => {
          this.onNoClick()
          this.showSuccess()
        },
        error => {
          this.onNoClick();
          this.showError()
        });
  }
  showSuccess(){
    this.toastr.success('Successfully !', 'Nofitication', {
   timeOut: 3000,
   toastClass: "alert alert-success alert-with-icon",
   positionClass: 'toast-' + 'top' + '-' +  'right'
 });
   }
   showError(){
    this.toastr.error('Error', 'Nofitication', {
   timeOut: 3000,
   toastClass: "alert alert-danger alert-with-icon",
   positionClass: 'toast-' + 'top' + '-' +  'right'
 });
   }


}