import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  constructor() {}
  colorName: string = 'Red';
  text: string =
    'Here the property "innerText" is bound from the component via the variable "text".';

  ngOnInit(): void {}
}
