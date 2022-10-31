import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.css']
})
export class ViewleaveComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getLeaveData()
  }
  
  leaveData:any
  
  getLeaveData=()=>{
    this.myApi.viewLeave().subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }

  updateStatus=(id:any)=>{
    console.log(this.setStatus+id)
    let data = {
      "id":id,
      "status":this.setStatus
    }
    this.myApi.leaveStatus(data).subscribe()
    alert("Updated successfully")
    this.setStatus = ""
    this.getLeaveData()
  }
    
    displayedColumns: string[] = ['name', 'description', 'apply_date', 'leave_date','type','status'];
    dataSource :any  
    setStatus :any
    ngOnInit(): void {
  }

}
