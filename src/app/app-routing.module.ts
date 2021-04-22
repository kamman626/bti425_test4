import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentOneComponent} from  './component-one/component-one.component'

const routes: Routes = [
  { path: 'home', component: ComponentOneComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
