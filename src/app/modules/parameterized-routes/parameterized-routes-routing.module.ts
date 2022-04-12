import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParameterizedRoutesComponent } from './parameterized-routes.component';

const routes: Routes = [{ path: '', component: ParameterizedRoutesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParameterizedRoutesRoutingModule { }
