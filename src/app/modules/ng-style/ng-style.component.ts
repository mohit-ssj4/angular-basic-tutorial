import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  constructor() {}
  colorName: string = 'Red';
  styles = {
    backgroundColor: 'Black',
    color: 'White',
  };

  ngOnInit(): void {}
}
