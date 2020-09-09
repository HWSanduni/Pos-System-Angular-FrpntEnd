import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './view/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatComponentModule}from './../../mat-component.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatComponentModule
  ]
})
export class HomeModule { }
