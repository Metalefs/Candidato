import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { HomeRoutes } from './home.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutes
  ]
})
export class HomeModule { }
