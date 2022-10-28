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

const link:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"addemployee",component:AdminComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdminnavbarComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
