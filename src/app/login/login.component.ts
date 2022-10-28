import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myrouter:Router) { }

  email=""
  password=""

  adminLogin=()=>{
    if (this.email=="admin" && this.password=="admin") {
      alert("Login successfull")
      this.myrouter.navigate(["/admindashboard"])
    } else {
      alert("Invalid Credentials")
    }
  }

  ngOnInit(): void {
  }

}
