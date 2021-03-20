import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ToastrService } from "ngx-toastr";
import { ApiServiceService } from "src/app/shared/service/api-service.service";
import { ConfirmDeleteComponent } from "../confirm-delete/confirm-delete/confirm-delete.component";
import { CreateDataComponent } from "../create-data/create-data.component";
import { EditDataComponent } from "../edit-data/edit-data.component";
import { EditDataPromotionComponent } from "./edit-data-promotion/edit-data-promotion.component";

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

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'brandID', 'description', 'beginDate', 'expiredDate', 'action', 'delete'];
  dataSource;
  user;
  title = '';
  idx = ''
  currentTutorial = null;
  users: User[];
  tutorials: any;

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
    this.apiService.getAllPromotion()
      .subscribe(
        data => {
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
    const dialogRef = this.dialog.open(EditDataPromotionComponent, {
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
    this.apiService.deletePromotion(idx.id)
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
    this.apiService.findByTitlePromotion(this.idx)
      .subscribe(
        data => {
          if(Array.isArray(data)) {
            this.dataSource = data;
          }
          else {
            this.dataSource = [data] 
          }
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

