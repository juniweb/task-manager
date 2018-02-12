import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { GlobalService } from './global.service';

@Injectable()
export class AuthenticationService {
  private BASE_URL = 'http://localhost:5000/auth';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http, private globalService: GlobalService) {}

  login(username: string, password: string): boolean {
    this.globalService.setAuthenticated(true);
    return this.globalService.getAuthenticated();
  }
}
