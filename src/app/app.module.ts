import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TestingComponent } from './testing/testing.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import {MatTableModule} from '@angular/material/table';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { ViewsecurityComponent } from './viewsecurity/viewsecurity.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import { ViewleaveComponent } from './viewleave/viewleave.component';
import { ViewlogsComponent } from './viewlogs/viewlogs.component';
import {MatSelectModule} from '@angular/material/select';
import { EmployeedashComponent } from './employeedash/employeedash.component';
import { EmployeenavbarComponent } from './employeenavbar/employeenavbar.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { MyleaveComponent } from './myleave/myleave.component';
import { MylogsComponent } from './mylogs/mylogs.component';
import { LoginnavbarComponent } from './loginnavbar/loginnavbar.component';

const link:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"addemployee",component:AdminComponent
  },
  {
    path:"testcase",component:TestingComponent
  },
  {
    path:"viewemployee",component:ViewemployeeComponent
  },
  {
    path:"searchemployee",component:SearchemployeeComponent
  },
  {
    path:"addsecurity",component:AddsecurityComponent
  },
  {
    path:"viewsecurity",component:ViewsecurityComponent
  },
  {
    path:"searchsecurity",component:SearchsecurityComponent
  },
  {
    path:"leaverequests",component:ViewleaveComponent
  },
  {
    path:"viewlogs",component:ViewlogsComponent
  },
  {
    path:"employeedash",component:EmployeedashComponent
  },
  {
    path:"applyleave",component:ApplyleaveComponent
  },
  {
    path:"myleave",component:MyleaveComponent
  },
  {
    path:"mylogs",component:MylogsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdminnavbarComponent,
    TestingComponent,
    ViewemployeeComponent,
    SearchemployeeComponent,
    AddsecurityComponent,
    ViewsecurityComponent,
    SearchsecurityComponent,
    ViewleaveComponent,
    ViewlogsComponent,
    EmployeedashComponent,
    EmployeenavbarComponent,
    ApplyleaveComponent,
    MyleaveComponent,
    MylogsComponent,
    LoginnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(link),
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
