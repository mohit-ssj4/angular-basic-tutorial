import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  constructor() {}
  users = [
    { userId: 1, userName: 'Iron Man' },
    { userId: 2, userName: 'Thor Odinson' },
    { userId: 3, userName: 'Hulk' },
    { userId: 4, userName: 'Spider Man' },
    { userId: 5, userName: 'Doctor Strange' },
  ];

  ngOnInit(): void {}
}
