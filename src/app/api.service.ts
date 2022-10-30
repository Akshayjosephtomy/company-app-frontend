import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  signinEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/signinemployee",data)
  }
  signinSec=(data:any)=>{
    return this.http.post("http://localhost:8080/signinsecurity",data)
  }

  addUser=(data:any)=>{
    return this.http.post("http://localhost:8080/addemployee",data)
  }
}
