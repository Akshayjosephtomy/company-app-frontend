import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getEmpData()
  }
  
  empData:any
  
  getEmpData=()=>{
    this.myApi.viewEmp().subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }

  deleteEmp=(id:any)=>{
    let data = {
      "id":id
    }
    console.log(data)
    this.myApi.deleteEmp(data).subscribe()
    alert("Delete succesful")
    this.getEmpData()
  }
    
    displayedColumns: string[] = ['name','emp_code', 'dob', 'email', 'address','salary','phone','joiningDate','delete'];
    dataSource :any
  
  ngOnInit(): void {
  }

}