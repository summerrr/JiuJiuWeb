import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../shared/auth.service";
import {Auth} from "./Auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  auth: Auth;
  constructor(public router: Router,public authservice: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formValue:any) {
   // localStorage.setItem('isLoggedin', 'true');
    this.authservice
      .loginWithCredentials(formValue.username, formValue.password)
      .then(auth => {
        let redirectUrl = (auth.redirectUrl === null)? '/': auth.redirectUrl;
        if(!auth.hasError) {
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
        } else {
          this.auth = Object.assign({}, auth);
        }
      });
  }

}
