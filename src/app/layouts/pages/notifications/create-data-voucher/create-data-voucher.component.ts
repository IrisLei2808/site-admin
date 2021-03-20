import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';

@Component({
  selector: 'app-create-data-voucher',
  templateUrl: './create-data-voucher.component.html',
  styleUrls: ['./create-data-voucher.component.scss']
})
export class CreateDataVoucherComponent implements OnInit {

  tutorials: any;
  dataSource;
  promotion = {
    code: '',
    description: '',
    quantity: '',
    available: ''
  };
   constructor(private apiService: ApiServiceService,
    public dialogRef: MatDialogRef<CreateDataVoucherComponent>,
    private toastr: ToastrService
    ) {}
  saveTutorial(): void {
    const data = {
      code: this.promotion.code,
      description: this.promotion.description,
      quantity: this.promotion.quantity,
      available: this.promotion.available
    };

    this.apiService.createVoucher(data)
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
    this.apiService.getAllVoucher()
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
