import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodelistPage } from './episodelist.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodelistPageRoutingModule {}
