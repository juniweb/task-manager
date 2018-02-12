import { Component, OnInit } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { GlobalService } from '../../shared/service/global.service';
import { AuthenticationService } from '../../shared/service/authentication.service';

interface LoginInfo {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GlobalService, AuthenticationService]
})
export class LoginComponent implements OnInit {
  loginInfo: LoginInfo = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private globalService: GlobalService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('login');
  }

  login() {
    console.log(this.loginInfo);
    console.log(this.globalService.getAuthenticated());

    if (
      this.authService.login(this.loginInfo.username, this.loginInfo.password)
    ) {
      console.log('Login Success....');
      this.router.navigate(['/home']);
    } else {
      console.log('Login Falie....');
    }
  }
}
