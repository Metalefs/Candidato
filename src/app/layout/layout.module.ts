import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { NavbarComponent } from './nav/horizontal/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './content-layout/page/side-nav/side-nav.component';
import { NavbariconComponent } from './content-layout/page/secondary-nav/component/navbaricon/navbaricon.component';
import { SecondaryNavComponent } from './content-layout/page/secondary-nav/component/secondary-nav.component';
import { ScrollTopComponent } from './content-layout/page/scroll-top/scroll-top.component';
import { ScrollDownComponent } from './content-layout/page/scroll-down/scroll-down.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { VerticalNavComponent } from './nav/vertical/vertical-nav.component';

@NgModule({
  declarations: [
    ScrollTopComponent,
    ScrollDownComponent,
    SideNavComponent,
    NavbariconComponent,
    SecondaryNavComponent,
    ContentLayoutComponent,
    LandingLayoutComponent,
    NavbarComponent,
    FooterComponent,
    VerticalNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  exports:[
    ContentLayoutComponent,
    LandingLayoutComponent,
    SideNavComponent,
    ScrollTopComponent,
    ScrollDownComponent,
    NavbarComponent,
    VerticalNavComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
