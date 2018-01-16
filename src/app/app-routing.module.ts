import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RealTimepageComponent } from './real-timepage/real-timepage.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MapDataComponent } from './map-data/map-data.component';
const routes: Routes = [
  {
    path: 'loging',
    component: LoginpageComponent,
  },
  {
    path: 'map',
    component: MapDataComponent,
  },
  {
    path: 'userlist',
    component: UserlistComponent,
  },
  {
    path: 'realtime',
    component: RealTimepageComponent,
  },
  {
    path: 'roomlist',
    component: RoomlistComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: LoginpageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
