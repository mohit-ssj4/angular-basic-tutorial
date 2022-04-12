import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css'],
})
export class AttributeBindingComponent implements OnInit {
  constructor() {}
  link: string = 'https://www.google.com';

  ngOnInit(): void {}
}
