import { Component, OnInit } from '@angular/core';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isSignedIn!: boolean;
  title = 'puntalFrontend';
  constructor( private auth: AuthStateService,
    public router: Router,
    public token: TokenService){}

    ngOnInit(): void {
      this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
      });
    }

    signOut() {
      this.token.removeToken();
      this.auth.setAuthState(false);
      this.router.navigate(['login']);
    }
 
}
