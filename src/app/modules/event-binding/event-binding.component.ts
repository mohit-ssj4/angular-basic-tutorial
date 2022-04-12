import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  constructor() {}
  name: string = 'Tony Stark';

  ngOnInit(): void {}

  changeName() {
    this.name = 'Iron Man';
  }

  resetName() {
    this.name = 'Tony Stark';
  }
}
