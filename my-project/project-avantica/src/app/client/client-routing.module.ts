import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClientComponent } from './components/list-client/list-client.component';

const routes: Routes = [
  { path: '', component: ListClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
