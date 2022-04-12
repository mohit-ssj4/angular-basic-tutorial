import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyBindingComponent } from './property-binding.component';

const routes: Routes = [{ path: '', component: PropertyBindingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyBindingRoutingModule { }
