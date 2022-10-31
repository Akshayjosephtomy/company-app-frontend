import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent implements OnInit {

  constructor(private myApi:ApiService) { }
  inputValue: any = ""
  searchData:any =[]
  onSearchSec = () => {
    let data
    if (isNaN(this.inputValue)) {
       data = {
        "s_id": 0,
        "name": this.inputValue
      }
    }else {
      data = {
        "s_id": this.inputValue,
        "name": this.inputValue
      }
    }
    this.myApi.searchSec(data).subscribe(
      (resp) =>{
        console.log(resp)
        this.searchData = resp
      }
    )

  }

  onUpdateSec=(s_id:any)=>{

    this.myApi.editSec(this.searchData[0]).subscribe(
      (resp)=>{
        alert("success")
        console.log(resp)
      }
    );
  } 
   ngOnInit(): void {
  }

}
