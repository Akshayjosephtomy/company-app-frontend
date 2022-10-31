import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  msg="nest"
  submit=()=>{
    console.log(this.msg)
    return this.msg
  }

  ngOnInit(): void {
  }

}
