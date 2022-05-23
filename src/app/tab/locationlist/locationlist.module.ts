import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationlistPageRoutingModule } from './locationlist-routing.module';

import { LocationlistPage } from './locationlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationlistPageRoutingModule
  ],
  declarations: [LocationlistPage]
})
export class LocationlistPageModule {}
