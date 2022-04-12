import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameterized-routes',
  templateUrl: './parameterized-routes.component.html',
  styleUrls: ['./parameterized-routes.component.css'],
})
export class ParameterizedRoutesComponent implements OnInit {
  id: string = '';
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
