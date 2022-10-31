import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeenavbar',
  templateUrl: './employeenavbar.component.html',
  styleUrls: ['./employeenavbar.component.css']
})
export class EmployeenavbarComponent implements OnInit {

  constructor(private myRouter:Router) { }
  logout=()=>{
    localStorage.clear
    this.myRouter.navigate(["/"])
  }

  ngOnInit(): void {
  }

}