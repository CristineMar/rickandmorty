import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodelistPageRoutingModule } from './episodelist-routing.module';

import { EpisodelistPage } from './episodelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodelistPageRoutingModule
  ],
  declarations: [EpisodelistPage]
})
export class EpisodelistPageModule {}
