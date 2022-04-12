import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinkComponent } from './router-link.component';

const routes: Routes = [{ path: '', component: RouterLinkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterLinkRoutingModule { }
