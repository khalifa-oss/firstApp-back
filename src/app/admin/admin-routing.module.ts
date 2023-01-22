import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../modules/create/create.component';
import { CreateTraineeShipComponent } from './create-trainee-ship/create-trainee-ship.component';
import { ManageTraineehipComponent } from './manage-trainee-ship/manage-traineehip.component';

const routes: Routes = [
  {path:'create',component:CreateTraineeShipComponent},
  {path:'manage',component:ManageTraineehipComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
