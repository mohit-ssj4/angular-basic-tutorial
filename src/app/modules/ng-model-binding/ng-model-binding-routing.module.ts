import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModelBindingComponent } from './ng-model-binding.component';

const routes: Routes = [{ path: '', component: NgModelBindingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgModelBindingRoutingModule { }
