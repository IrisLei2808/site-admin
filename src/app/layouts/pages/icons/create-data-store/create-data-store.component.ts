import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';
import { CreateDataPromotionComponent } from '../../dashboard/create-data-promotion/create-data-promotion.component';

@Component({
  selector: 'app-create-data-store',
  templateUrl: './create-data-store.component.html',
  styleUrls: ['./create-data-store.component.scss']
})
export class CreateDataStoreComponent implements OnInit {

  tutorials: any;
  dataSource;
  brandId: number
  promotion = {
    name: '',
    address: '',
    phone: ''
  };
   constructor(private apiService: ApiServiceService,
    public dialogRef: MatDialogRef<CreateDataStoreComponent>,
    private toastr: ToastrService
    ) {}
  saveTutorial(): void {
    const data = {
      brandId: this.brandId,
      name: this.promotion.name,
      address: this.promotion.address,
      phone: this.promotion.phone
    };

    this.apiService.createStore(data)
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
    this.apiService.getAllStore()
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
