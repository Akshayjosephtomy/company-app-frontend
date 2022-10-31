import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getCheckInData()
  }
  
  
  
  getCheckInData=()=>{
    this.myApi.viewCheckIn().subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }
  checkOut=(id:any)=>{
    let data = {
      "id":id,
      "logout_s_id":localStorage.getItem('s_id')
    }
    this.myApi.checkOut(data).subscribe()
    alert("Checked him Out")
    this.getCheckInData()
  }

 
    
    displayedColumns: string[] = ['emp_code', 'login', 'update'];
    dataSource :any =[]
  ngOnInit(): void {
  }

}