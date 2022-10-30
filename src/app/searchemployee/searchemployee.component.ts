import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myApi:ApiService) { }
  inputValue: any = ""
  searchData:any =[]
  onSearchEmp = () => {
    let data
    if (isNaN(this.inputValue)) {
       data = {
        "emp_code": 0,
        "name": this.inputValue
      }
    }else {
      data = {
        "emp_code": this.inputValue,
        "name": this.inputValue
      }
    }
    this.myApi.searchEmp(data).subscribe(
      (resp) =>{
        this.searchData = resp
      }
    )

  }

  onUpdateEmp=(emp_code:any)=>{

    this.myApi.editEmp(this.searchData[0]).subscribe(
      (resp)=>{
        alert("success")
        console.log(resp)
      }
    );
  }

  ngOnInit(): void {
  }

}
