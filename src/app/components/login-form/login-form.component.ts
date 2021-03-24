import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialUser, SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  socialUser: SocialUser;
  isLoggedin: boolean;  
  
  constructor(
    private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService,
    private router: Router  
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      passworded: ['', Validators.required],
    });    
    
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
    //  this.isLoggedin = (user != null);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigateByUrl('/dashboard');
    console.log('Login Successfully')
  }

  loginWithFacebook = () => {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.router.navigateByUrl('/dashboard');
  }

  logOut(): void {
    this.socialAuthService.signOut();
    this.router.navigateByUrl('/')
  }

}
