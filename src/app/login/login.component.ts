import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myrouter:Router,private myapi:ApiService) { }

  email=""
  password=""

  adminLogin=()=>{
    if (this.email=="admin" && this.password=="admin") {
      alert("Login successfull")
      this.myrouter.navigate(["/addemployee"])
    } else {
      alert("Invalid Credentials")
    }
  }

  signinEmp=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.signinEmp(data).subscribe(
      (response:any)=>{
        if (response.length>0) {
          localStorage.setItem("emp_code",response[0].emp_code)
          this.myrouter.navigate(["/employeedashboard"])
          alert("login success")
        } else {
          alert("Invalid Credentials")
        }
      }
    )
  }

  signinSec=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.signinSec(data).subscribe(
      (response:any)=>{
        if (response.length>0) {
          localStorage.setItem("s_id",response[0].s_id)
          alert("login success")
          this.myrouter.navigate(["/securitydashboard"])
          
        } else {
          alert("Invalid Credentials")
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
