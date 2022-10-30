import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsecurity',
  templateUrl: './viewsecurity.component.html',
  styleUrls: ['./viewsecurity.component.css']
})
export class ViewsecurityComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getSecData()
  }
  
  
  
  getSecData=()=>{
    this.myApi.viewSec().subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }

  deleteSec=(id:any)=>{
    let data = {
      "id":id
    }
    console.log(data)
    this.myApi.deleteSec(data).subscribe()
    alert("Delete succesful")
    this.getSecData()
  }
    
    displayedColumns: string[] = ['name', 's_id', 'email', 'address','salary','phone','joining_date','delete'];
    dataSource :any
  
  
  ngOnInit(): void {
  }

}
