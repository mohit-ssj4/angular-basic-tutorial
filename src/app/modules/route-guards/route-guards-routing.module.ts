import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RouteGuardsComponent } from './route-guards.component';

const routes: Routes = [
  { path: '', component: RouteGuardsComponent, canDeactivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteGuardsRoutingModule {}
