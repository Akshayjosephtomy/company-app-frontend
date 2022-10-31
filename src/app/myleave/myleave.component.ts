import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-myleave',
  templateUrl: './myleave.component.html',
  styleUrls: ['./myleave.component.css']
})
export class MyleaveComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getLeaveData()
  }
  
  leaveData:any
  
  getLeaveData=()=>{
    let data ={
      "emp_code":localStorage.getItem('emp_code')
    }
    this.myApi.viewLeaveById(data).subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }

    
    displayedColumns: string[] = ['id', 'description', 'apply_date', 'leave_date','type','status'];
    dataSource :any  
  
  ngOnInit(): void {
  }

}