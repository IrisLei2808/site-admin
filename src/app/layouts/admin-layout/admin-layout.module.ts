import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import { AdminLayoutRoutes } from "./admin-layout.routing";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { IconsComponent } from "../pages/icons/icons.component";
import { MapComponent } from "../pages/map/map.component";
import { NotificationsComponent } from "../pages/notifications/notifications.component";
import { UserComponent } from "../pages/user/user.component";
import { TablesComponent } from "../pages/tables/tables.component";
import { TypographyComponent } from "../pages/typography/typography.component";
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CreateDataComponent } from "src/app/layouts/pages/create-data/create-data.component";
import { EditDataComponent } from "../pages/edit-data/edit-data.component";
import { ConfirmDeleteComponent } from "../pages/confirm-delete/confirm-delete/confirm-delete.component";
import { EditDataPromotionComponent } from "../pages/dashboard/edit-data-promotion/edit-data-promotion.component";
import { EditDataStoreComponent } from "../pages/icons/edit-data-store/edit-data-store.component";
import { EditDataUserComponent } from "../pages/map/edit-data-user/edit-data-user.component";
import { EditDataVoucherComponent } from "../pages/notifications/edit-data-voucher/edit-data-voucher.component";
import { CreateDataPromotionComponent } from "../pages/dashboard/create-data-promotion/create-data-promotion.component";
import { CreateDataStoreComponent } from "../pages/icons/create-data-store/create-data-store.component";
import { CreateDataUserComponent } from "../pages/map/create-data-user/create-data-user.component";
import { CreateDataVoucherComponent } from "../pages/notifications/create-data-voucher/create-data-voucher.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    CreateDataComponent,
    MapComponent,
    EditDataComponent,
    ConfirmDeleteComponent,
    EditDataPromotionComponent,
    EditDataStoreComponent, 
    EditDataUserComponent, 
    EditDataVoucherComponent, 
    CreateDataPromotionComponent, 
    CreateDataStoreComponent, 
    CreateDataUserComponent, 
    CreateDataVoucherComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
