import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraineeShipRoutingModule } from './trainee-ship-routing.module';
import { ProblemComponent } from './problem/problem.component';


@NgModule({
  declarations: [
    ProblemComponent
  ],
  imports: [
    CommonModule,
    TraineeShipRoutingModule
  ]
})
export class TraineeShipModule { }
