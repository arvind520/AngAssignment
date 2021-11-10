import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent implements OnInit {
  @Input() colorPicked: any;
  @Input() handleColorPick: any;

  constructor() {}

  ngOnInit(): void {}
}
