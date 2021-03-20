import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';

@Component({
  selector: 'app-create-data-user',
  templateUrl: './create-data-user.component.html',
  styleUrls: ['./create-data-user.component.scss']
})
export class CreateDataUserComponent implements OnInit {

  tutorials: any;
  dataSource;
  promotion = {
    name: '',
    address: '',
  };
   constructor(private apiService: ApiServiceService,
    public dialogRef: MatDialogRef<CreateDataUserComponent>,
    private toastr: ToastrService
    ) {}
  saveTutorial(): void {
    const data = {
      name: this.promotion.name,
      address: this.promotion.address,
    };

    this.apiService.createUser(data)
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
    this.apiService.getAllUser()
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
