import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { MoviDetailsComponent } from './component/movi-details/movi-details.component';

const routes: Routes = [

  {
    path:'',component:HomeComponent
  },
  {
    path:'search',component:SearchComponent
  },
  {
    path:'movi/:id',component:MoviDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
