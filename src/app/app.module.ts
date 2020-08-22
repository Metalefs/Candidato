import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './core/interceptor/index';
import { CountUpModule } from 'ngx-countup';
import { ClarityModule } from '@clr/angular';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule  } from 'ngx-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentLayoutComponent } from 'src/app/layout/content-layout/content-layout.component';
import { SecondaryNavComponent } from 'src/app/layout/content-layout/page/secondary-nav/component/secondary-nav.component';

import { NavbariconComponent } from 'src/app/layout/content-layout/page/secondary-nav/component/navbaricon/navbaricon.component';
import { FeedbackComponent } from 'src/app/layout/content-layout/page//feedback/feedback.component';
import { ScrollTopComponent } from 'src/app/layout/content-layout/page/scroll-top/scroll-top.component';

import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { NavbarComponent } from 'src/app/layout/nav/navbar.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import {  } from './_helpers/_helper';
import { RouteReuseStrategy } from '@angular/router';
import { RouteReuseService } from 'src/app/core/service/RouteReuseService';

@NgModule({
  declarations: [
    AppComponent,
    SecondaryNavComponent,
    NavbariconComponent,
    FeedbackComponent,
    ScrollTopComponent,
    FooterComponent,
    NavbarComponent,
    ContentLayoutComponent,
  ],
  imports: [
    ClarityModule,
    MaterialModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CountUpModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    NgxMaskModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: Document },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReuseService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
