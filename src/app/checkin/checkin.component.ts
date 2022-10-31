import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  emp_code = ""

  checkIn=()=>{
    let data = {
      "emp_code":this.emp_code,
      "login_s_id":localStorage.getItem('s_id')
    }
    this.myApi.checkIn(data).subscribe()
    this.emp_code = ""
  }

  ngOnInit(): void {
  }

}
