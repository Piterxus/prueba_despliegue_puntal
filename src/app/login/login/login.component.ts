import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { StorageService } from 'src/app//services/login/storage.service';
import {FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/token.service';
import { AuthStateService } from 'src/app/shared/auth-state.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // form: any = {
  //   username: null,
  //   password: null
  // };
  // isLoggedIn = false;
  // isLoginFailed = false;
  errorMessage = '';
  loginForm: FormGroup;
  errors: any = null;
  // roles: string[] = [];

  constructor(  public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService) { 
      this.loginForm = this.fb.group({
        email: [],
        password: [],
      });
    }

  ngOnInit(): void {
    // if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }
    console.log("login.component.ts ngOnInit");
  }
  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) =>  {
        console.log('Resultado del login:', result);
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('role', result.user.Rol_id);
        console.log('Resultado del usuario:', result.user.Rol_id);
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      }
    );
  }
  responseHandler(data:any) {
    this.token.handleData(data.access_token);
  }
  // onSubmit(): void {
  //   const { username, password } = this.form;

  //   this.authService.login(username, password).subscribe({
  //     next: data => {
  //       this.storageService.saveUser(data);

  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.storageService.getUser().roles;
  //       this.reloadPage();
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   });
  // }

  // reloadPage(): void {
  //   window.location.reload();
  // }
}