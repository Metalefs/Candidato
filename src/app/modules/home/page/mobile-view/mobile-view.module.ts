import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileViewComponent } from './mobile-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [MobileViewComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MobileViewComponent]
})
export class MobileViewModule { }
