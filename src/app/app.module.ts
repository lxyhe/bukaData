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

import { HeadpageComponent } from './headpage/headpage.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { RealTimepageComponent } from './real-timepage/real-timepage.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MapDataComponent } from './map-data/map-data.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgxEchartsModule
  ],
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterPageComponent,
    MainPageComponent,

    HeadpageComponent,

    RealTimepageComponent,

    RoomlistComponent,

    UserlistComponent,

    MapDataComponent,
  ],
  providers: [
    HttpServesService,
    AjaxServeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
