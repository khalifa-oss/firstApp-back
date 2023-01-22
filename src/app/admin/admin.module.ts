import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageTraineehipComponent } from './manage-trainee-ship/manage-traineehip.component';
import { CreateTraineeShipComponent } from './create-trainee-ship/create-trainee-ship.component';


@NgModule({
  declarations: [
    ManageTraineehipComponent,
    CreateTraineeShipComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
