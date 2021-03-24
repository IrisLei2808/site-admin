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
//import {AngularFireModule} from 'angularfire2'
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import {FacebookLoginProvider} from 'angularx-social-login';
import { LoginFormComponent } from "./components/login-form/login-form.component";
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';




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
    ReactiveFormsModule,
    SocialLoginModule,
    MatInputModule,
    MatCardModule,
    ToastrModule.forRoot(),
    //AngularFireModule.initializeApp(firebaseConfig)
  ],
  exports: [NgbModule],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, DeleteDataComponent, LoginFormComponent],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '231475118417-h2kmg97tkjhtntiq9hq9n0rt9s5eu529.apps.googleusercontent.com'
            )
          }, 
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
               '235732034967211'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
