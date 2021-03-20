import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, Inject, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ToastrService } from "ngx-toastr";
import { ApiServiceService } from "src/app/shared/service/api-service.service";
import { ConfirmDeleteComponent } from "../confirm-delete/confirm-delete/confirm-delete.component";
import { CreateDataComponent } from "../create-data/create-data.component";
import { EditDataComponent } from "../edit-data/edit-data.component";


export interface User {
  name: string;
  email: string;
  phone: string;
  website: string;
  id: number,
  username: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export interface Brand {
   id: number
   name: string
   address: string
   phone: string
   website: string
}

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
  styleUrls: ["tables.component.scss"]
})
export class TablesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'phone', 'website', 'action', 'delete'];
  dataSource;
  user;
  title = '';
  name = ''
  idx = ''
  currentTutorial = null;
  users: User[];
  tutorials: any;
   datax: Brand[]
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private apiService: ApiServiceService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
      this.retrieveTutorials()
  }

  retrieveTutorials(): void {
    this.apiService.getAllBrand()
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

  openDialog() {
     this.dialog.open(CreateDataComponent, {
        disableClose: true
     }).afterClosed().subscribe(() => this.retrieveTutorials())
  }

  editUser(user) {
    const dialogRef = this.dialog.open(EditDataComponent, {
      width: '35%',
      data: user,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = user;
    });
  }

  confirmDelete() {
     const dialog = this.dialog.open(ConfirmDeleteComponent, {
        width: '40%'
     })
  
  }


  deleteTutorial(idx): void {
    console.log("Data", idx.id)
    this.apiService.deleteBrand(idx.id)
      .subscribe(
        response => {
          console.log('success', response);
          this.showSuccess();
          this.retrieveTutorials();
        },
        error => {
          console.log('error', error);
          this.showError()
        });
  }

  searchTitle(): void {
    this.apiService.findByTitleBrand(this.idx)
      .subscribe(
        data => {
          if(Array.isArray(data)) {
            this.dataSource = data;
          }
          else {
            this.dataSource = [data] 
          }
          console.log('data', data);
          this.showSuccess();
        },
        error => {
          console.log(error);
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
