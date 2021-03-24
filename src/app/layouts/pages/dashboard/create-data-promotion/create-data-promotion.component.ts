import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';
import { CreateDataComponent } from '../../create-data/create-data.component';

@Component({
  selector: 'app-create-data-promotion',
  templateUrl: './create-data-promotion.component.html',
  styleUrls: ['./create-data-promotion.component.scss']
})
export class CreateDataPromotionComponent implements OnInit {

  tutorials: any;
  dataSource;
  brandId: number //
  promotion = {
    description: '',
    beginDate: '',
    expiredDate: ''
  };
   constructor(private apiService: ApiServiceService,
    public dialogRef: MatDialogRef<CreateDataPromotionComponent>,
    private toastr: ToastrService
    ) {}
  saveTutorial(): void {
    const data = {
      brandId: this.brandId, //
      description: this.promotion.description,
      beginDate: this.promotion.beginDate,
      expiredDate: this.promotion.expiredDate
    };

    this.apiService.createPromotion(data)
      .subscribe(
        response => {
          console.log(response);
          this.onNoClick()
          this.showSuccess();
         this.retrieveTutorials();
        },
        error => {
          console.log(error);
          this.showError()
        });
  }

  retrieveTutorials(): void {
    this.apiService.getAllPromotion()
      .subscribe(
        data => {
          this.tutorials = data;
          this.dataSource = new MatTableDataSource(data)
          console.log(data);
        },
        error => {
          console.log(error);
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

   onNoClick() {
    this.dialogRef.close();
   }
  ngOnInit(): void {
  }

}
