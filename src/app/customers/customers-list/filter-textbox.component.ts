import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  template: `
    Filter: <input type="text" />
  `
})

export class AppFilterTextboxComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
