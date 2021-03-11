import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { DeleteDataComponent } from './layouts/pages/delete-data/delete-data.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EditDataPromotionComponent } from './layouts/pages/dashboard/edit-data-promotion/edit-data-promotion.component';
import { EditDataStoreComponent } from './layouts/pages/icons/edit-data-store/edit-data-store.component';
import { EditDataUserComponent } from './layouts/pages/map/edit-data-user/edit-data-user.component';
import { EditDataVoucherComponent } from './layouts/pages/notifications/edit-data-voucher/edit-data-voucher.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatPaginatorModule,
    ToastrModule.forRoot()
  ],
  exports: [NgbModule],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, DeleteDataComponent, EditDataPromotionComponent, EditDataStoreComponent, EditDataUserComponent, EditDataVoucherComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
