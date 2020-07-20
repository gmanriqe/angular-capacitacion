import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListClientComponent } from './components/list-client/list-client.component';
import { MaterialModule } from '../material/material.module';
import { FormClientComponent } from './components/form-client/form-client.component';


@NgModule({
  declarations: [ListClientComponent, FormClientComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ClientRoutingModule
  ],
})
export class ClientModule { }
