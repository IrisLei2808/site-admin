import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ToastrService } from "ngx-toastr";
import { ApiServiceService } from "src/app/shared/service/api-service.service";
import { ConfirmDeleteComponent } from "../confirm-delete/confirm-delete/confirm-delete.component";
import { CreateDataUserComponent } from "./create-data-user/create-data-user.component";
import { EditDataUserComponent } from "./edit-data-user/edit-data-user.component";


@Component({
  selector: "app-map",
  templateUrl: "map.component.html",
  styleUrls: ["map.component.scss"]
})
export class MapComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'phone','createdDate', 'action', 'delete'];
  dataSource;
  user;
  title = '';
  currentTutorial = null;
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

  openDialog() {
     this.dialog.open(CreateDataUserComponent, {
        disableClose: true
     }).afterClosed().subscribe(() => this.retrieveTutorials())
  }

  editUser(user) {
    const dialogRef = this.dialog.open(EditDataUserComponent, {
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
    this.apiService.deleteUser(idx.id)
      .subscribe(
        response => {
          console.log('error', response);
          this.showError()
        },
        error => {
          console.log('success', error);
          this.showSuccess();
          this.retrieveTutorials();
        });
  }

  searchTitle(): void {
    this.apiService.findByTitleUser(this.title)
      .subscribe(
        data => {
          if(Array.isArray(data)) {
            this.dataSource = data;
          }
          else {
            this.dataSource = [data] 
          }
          console.log(data);
          this.showSuccess();
         // this.retrieveTutorials()
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
