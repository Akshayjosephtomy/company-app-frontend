import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewlogs',
  templateUrl: './viewlogs.component.html',
  styleUrls: ['./viewlogs.component.css']
})
export class ViewlogsComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getLogData()
  }
  
  
  
  getLogData=()=>{
    this.myApi.viewLog().subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }

 
    
    displayedColumns: string[] = ['employee_name', 'login', 'login_s_name', 'logout','logout_s_name'];
    dataSource :any =[]
  ngOnInit(): void {
  }

}
