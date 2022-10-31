import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-securitynavbar',
  templateUrl: './securitynavbar.component.html',
  styleUrls: ['./securitynavbar.component.css']
})
export class SecuritynavbarComponent implements OnInit {

  constructor(private myRouter:Router) { }
  logout=()=>{
    localStorage.clear
    this.myRouter.navigate(["/"])
  }

  ngOnInit(): void {
  }

}