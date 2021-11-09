import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { TopheaderComponent } from './topheader/topheader.component';

const routes: Routes = [
  {path:'',component:TopheaderComponent},
  {path:'tech',component:TechComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
