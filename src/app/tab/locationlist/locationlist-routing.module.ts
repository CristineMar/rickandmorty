import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationlistPage } from './locationlist.page';

const routes: Routes = [
  {
    path: '',
    component: LocationlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationlistPageRoutingModule {}
