import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-and-slider',
  templateUrl: './menu-and-slider.component.html',
  styleUrls: ['./menu-and-slider.component.css'],
})
export class MenuAndSliderComponent implements OnInit {
  accessoriesValue = 1;
  handleAccessories(accessValue: any) {
    this.accessoriesValue = accessValue;
  }

  constructor() {}

  ngOnInit(): void {}
}
