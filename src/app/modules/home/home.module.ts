import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home.routing';
import { DesktopViewModule } from './page/desktop-view/desktop-view.module';
import { MobileViewModule } from './page/mobile-view/mobile-view.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    DesktopViewModule,
    MobileViewModule
  ]
})
export class HomeModule { }
