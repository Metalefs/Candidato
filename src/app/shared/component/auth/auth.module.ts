import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegistroClienteComponent } from './page/login-registro/login-registro-cliente.component';
import { LoginDialogComponent } from 'src/app/layout/nav/horizontal/login-dialog/login-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { MatDialogModule } from '@angular/material/dialog' 
@NgModule({
  declarations: [
    LoginRegistroClienteComponent,
    LoginDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
    ClarityModule
  ],
  exports: [
    LoginRegistroClienteComponent,
    LoginDialogComponent
  ]
})
export class AuthModule { }
