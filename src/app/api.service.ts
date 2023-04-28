import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { map } from 'rxjs';
import { Credentials } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  private url:string = "http://localhost:8080/api/v1";

  constructor(private http:HttpClient) { }

  register(creds:Credentials) {
    return this.http.post(`${this.url}/auth/register`, creds, {observe: 'response'})
    .pipe(map((response:HttpResponse<any>) => {
      
      const body = response.body;
      const token = response.body.token;
      localStorage.setItem('token', token);

      return body;
    }));
  }

  getToken() {
    return localStorage.getItem('token');
  }
  
}
