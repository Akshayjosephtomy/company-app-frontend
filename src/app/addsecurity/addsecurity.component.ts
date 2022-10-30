import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  name = ""
  s_id = ""
  salary = ""
  address = ""
  email = ""
  phone = ""
  password = ""
  
  onSecAdd = () => {
    let data = {
      "name": this.name,
      "s_id": this.s_id,
      "salary": this.salary,
      "address": this.address,
      "email": this.email,
      "phone": this.phone,
      "password": this.password,
    }
    console.log(data)
    this.myApi.addSec(data).subscribe();
    alert("Security added");


  }
  ngOnInit(): void {
  }

}
