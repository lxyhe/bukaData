import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { LoginpageComponent } from './loginpage/loginpage.component';

import { AppRoutingModule } from './app-routing.module';

import { RegisterPageComponent } from './register-page/register-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AjaxServeService } from '../providers/ajax-serve.service';
import { HttpServesService } from '../providers/http-serves.service';
import { MainRoutingModule } from './main-page/Main-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterPageComponent,
    MainPageComponent,
  ],
  providers: [
    HttpServesService,
    AjaxServeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
