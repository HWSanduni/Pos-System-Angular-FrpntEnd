import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule)}, { path: 'item', loadChildren: () => import('./view/item/item.module').then(m => m.ItemModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
