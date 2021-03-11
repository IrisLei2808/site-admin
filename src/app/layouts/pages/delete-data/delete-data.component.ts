import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';


export interface DialogData {
  id
}

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss']
})
export class DeleteDataComponent implements OnInit {

  constructor(
    public apiService: ApiServiceService,
    public dialogRef: MatDialogRef<DeleteDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) 
    { }

  ngOnInit(): void {
   
  }

}
