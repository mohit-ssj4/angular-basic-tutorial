import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent implements OnInit {
  constructor() {}
  message: string = 'This message is coming from the component to the view.';

  ngOnInit(): void {}
}
