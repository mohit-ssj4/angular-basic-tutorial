import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-binding',
  templateUrl: './ng-model-binding.component.html',
  styleUrls: ['./ng-model-binding.component.css'],
})
export class NgModelBindingComponent implements OnInit {
  constructor() {}
  username: string = 'Iron Man';

  ngOnInit(): void {}
}
