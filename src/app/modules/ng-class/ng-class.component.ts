import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent implements OnInit {
  constructor() {}
  className: string = 'text-purple-700';
  multipleClasses: string = 'bg-purple-600 text-white';
  addClass: boolean = true;

  ngOnInit(): void {}
}
