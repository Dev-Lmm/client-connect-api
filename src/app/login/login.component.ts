import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
import { Credentials } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  title:string = "Create account";

  creds:Credentials= {
    username:'',
    email:'',
    password:''
  };

  constructor(private apiService: ApiService, private router:Router){}

  register(form: NgForm){
    this.apiService.register(this.creds).subscribe(response =>{
      this.router.navigate(['/']);
    })
  }
}
