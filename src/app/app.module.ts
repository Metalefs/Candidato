import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';

import { RouteReuseStrategy } from '@angular/router';
import { RouteReuseService } from 'src/app/core/service/RouteReuseService';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './core/interceptor/index';
import { ClarityModule } from '@clr/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeedbackComponent } from 'src/app/layout/content-layout/page//feedback/feedback.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { NavStateService } from 'src/app/core/service/state/_NavStateService';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    FontAwesomeModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: Document },
    { provide: NavStateService },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReuseService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
