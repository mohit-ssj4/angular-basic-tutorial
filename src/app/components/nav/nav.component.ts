import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/models/nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  navArray: Nav[] = [
    { pathName: 'Directives', link: '/directives' },
    { pathName: 'NgIf', link: '/ngIf' },
    { pathName: 'NgSwitch', link: '/ngSwitch' },
    { pathName: 'NgFor', link: '/ngFor' },
    { pathName: 'NgStyle', link: '/ngStyle' },
    { pathName: 'NgClass', link: '/ngClass' },
    { pathName: 'DataBinding', link: '/dataBinding' },
    { pathName: 'Interpolation', link: '/interpolation' },
    { pathName: 'PropertyBinding', link: '/propertyBinding' },
    { pathName: 'AttributeBinding', link: '/attributeBinding' },
    { pathName: 'EventBinding', link: '/eventBinding' },
    { pathName: 'NgModelBinding', link: '/ngModelBinding' },
    { pathName: 'Pipes', link: '/pipes' },
    { pathName: 'BaseHref', link: '/baseHref' },
    { pathName: 'ParameterizedRoutes', link: '/parameterizedRoutes/1' },
    { pathName: 'RouterLink', link: '/routerLink' },
    { pathName: 'QueryParams', link: '/queryParams' },
    { pathName: 'LazyLoading', link: '/lazyLoading' },
    { pathName: 'RouteGuards', link: '/routeGuards' },
  ];

  ngOnInit(): void {}
}
