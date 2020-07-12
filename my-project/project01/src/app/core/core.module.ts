import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
