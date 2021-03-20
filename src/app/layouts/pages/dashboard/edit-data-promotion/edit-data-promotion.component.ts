import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';
import { User } from '../dashboard.component';

@Component({
  selector: 'app-edit-data-promotion',
  templateUrl: './edit-data-promotion.component.html',
  styleUrls: ['./edit-data-promotion.component.scss']
})
export class EditDataPromotionComponent implements OnInit {

  currentTutorial = null;
  constructor(
    public dialogRef: MatDialogRef<EditDataPromotionComponent>,
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
    this.apiService.updatePromotion(this.data.id, this.data)
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
