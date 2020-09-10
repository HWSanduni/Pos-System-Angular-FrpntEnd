import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home.component';
import { CustomerComponent } from './../customer/view/customer.component';
import { CustomerModule } from './../customer/customer.module';


const routes: Routes = [{ 
  path: '',
  component: HomeComponent ,
      children:[{
       path:'customer',
       loadChildren:"src/app/view/customer/customer.module#CustomerModule"},
      {
        path:'item',
        loadChildren:"src/app/view/item/item.module#ItemModule"
      }
      
      ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 

exports: [RouterModule]
})
export class HomeRoutingModule { }
