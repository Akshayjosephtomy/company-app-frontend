import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {

  constructor(private myApi:ApiService) { }
 
  type = ""
  description = ""
  leave_date = ""
  onAddLeave= () => {
    let data = {
      "emp_code" : localStorage.getItem("emp_code"),
      "type":this.type,
      "description":this.description,
      "leave_date":this.leave_date
    }
  
    console.log(data)
    this.myApi.applyLeave(data).subscribe();
    alert("applied");


  }
  ngOnInit(): void {
  }

}