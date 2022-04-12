import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'directives',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./modules/todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'directives',
    loadChildren: () =>
      import('./modules/directives/directives.module').then(
        (m) => m.DirectivesModule
      ),
  },
  {
    path: 'ngIf',
    loadChildren: () =>
      import('./modules/ng-if/ng-if.module').then((m) => m.NgIfModule),
  },
  {
    path: 'ngSwitch',
    loadChildren: () =>
      import('./modules/ng-switch/ng-switch.module').then(
        (m) => m.NgSwitchModule
      ),
  },
  {
    path: 'ngFor',
    loadChildren: () =>
      import('./modules/ng-for/ng-for.module').then((m) => m.NgForModule),
  },
  {
    path: 'ngStyle',
    loadChildren: () =>
      import('./modules/ng-style/ng-style.module').then((m) => m.NgStyleModule),
  },
  {
    path: 'ngClass',
    loadChildren: () =>
      import('./modules/ng-class/ng-class.module').then((m) => m.NgClassModule),
  },
  {
    path: 'dataBinding',
    loadChildren: () =>
      import('./modules/data-binding/data-binding.module').then(
        (m) => m.DataBindingModule
      ),
  },
  {
    path: 'interpolation',
    loadChildren: () =>
      import('./modules/interpolation/interpolation.module').then(
        (m) => m.InterpolationModule
      ),
  },
  {
    path: 'propertyBinding',
    loadChildren: () =>
      import('./modules/property-binding/property-binding.module').then(
        (m) => m.PropertyBindingModule
      ),
  },
  {
    path: 'attributeBinding',
    loadChildren: () =>
      import('./modules/attribute-binding/attribute-binding.module').then(
        (m) => m.AttributeBindingModule
      ),
  },
  {
    path: 'eventBinding',
    loadChildren: () =>
      import('./modules/event-binding/event-binding.module').then(
        (m) => m.EventBindingModule
      ),
  },
  {
    path: 'ngModelBinding',
    loadChildren: () =>
      import('./modules/ng-model-binding/ng-model-binding.module').then(
        (m) => m.NgModelBindingModule
      ),
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./modules/pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    path: 'baseHref',
    loadChildren: () =>
      import('./modules/base-href/base-href.module').then(
        (m) => m.BaseHrefModule
      ),
  },
  {
    path: 'parameterizedRoutes/:id',
    loadChildren: () =>
      import('./modules/parameterized-routes/parameterized-routes.module').then(
        (m) => m.ParameterizedRoutesModule
      ),
  },
  {
    path: 'routerLink',
    loadChildren: () =>
      import('./modules/router-link/router-link.module').then(
        (m) => m.RouterLinkModule
      ),
  },
  {
    path: 'queryParams',
    loadChildren: () =>
      import('./modules/query-params/query-params.module').then(
        (m) => m.QueryParamsModule
      ),
  },
  {
    path: 'lazyLoading',
    loadChildren: () =>
      import('./modules/lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      ),
  },
  {
    path: 'routeGuards',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./modules/route-guards/route-guards.module').then(
        (m) => m.RouteGuardsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
