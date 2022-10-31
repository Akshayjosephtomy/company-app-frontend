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
  viewEmp=()=>{
    return this.http.get("http://localhost:8080/viewemployee")
  }
  deleteEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteemployee",data)
  }
  searchEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/searchemployee",data)
  }
  editEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/editemployee",data)
  }
  viewSec=()=>{
    return this.http.get("http://localhost:8080/viewsecurity")
  }
  addSec=(data:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",data)
  }
  deleteSec=(data:any)=>{
    return this.http.post("http://localhost:8080/deletesecurity",data)
  }
  searchSec=(data:any)=>{
    return this.http.post("http://localhost:8080/searchsecurity",data)
  }
  editSec=(data:any)=>{
    return this.http.post("http://localhost:8080/editsecurity",data)
  }
  viewLeave=()=>{
    return this.http.get("http://localhost:8080/viewallleaves")
  }
  leaveStatus=(data:any)=>{
    return this.http.post("http://localhost:8080/leavestatus",data)
  }
  viewLog=()=>{
    return this.http.get("http://localhost:8080/viewlog")
  }
  applyLeave=(data:any)=>{
    return this.http.post("http://localhost:8080/applyleave",data)
  }
  viewLeaveById=(data:any)=>{
    return this.http.post("http://localhost:8080/viewmyleaves",data)
  }
  viewLogById=(data:any)=>{
    return this.http.post("http://localhost:8080/viewmylog",data)
  }
}
