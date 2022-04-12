import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}
  username: string = 'iron man';
  dateValue: number = Date.now();
  currencyValue: number = 25;

  ngOnInit(): void {}
}
