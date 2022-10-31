import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mylogs',
  templateUrl: './mylogs.component.html',
  styleUrls: ['./mylogs.component.css']
})
export class MylogsComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getLogData()
  }
  
  
  
  getLogData=()=>{
    let data = {
      "emp_code":localStorage.getItem('emp_code')
    }
    this.myApi.viewLogById(data).subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }

 
    
    displayedColumns: string[] = ['id', 'login', 'login_s_name', 'logout','logout_s_name'];
    dataSource :any =[]
  ngOnInit(): void {
  }

}
