import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  email=""
  emp_code=""
  password=""
  salary=""
  dob=""
  phone=""
  address=""

  AddEmp=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phone":this.phone,
      "address":this.address,
      "email":this.email,
      "password":this.password,
      "salary":this.salary,
      "emp_code":this.emp_code
    }
    console.log(data)
    this.myapi.addUser(data).subscribe(
      (response)=>{
        console.log(response)
        alert("SignUp successfull")
      }
    )
    this.name="",
    this.dob="",
    this.phone="",
    this.address="",
    this.email="",
    this.password="",
    this.salary="",
    this.emp_code=""
  }


  ngOnInit(): void {
  }

}
