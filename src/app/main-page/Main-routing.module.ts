import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: 'roomlist',
        component: RoomlistComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
