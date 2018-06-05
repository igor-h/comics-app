import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() {

    let title = "app";
    let selectedValue: string = "";
    let items = [
      { value: "0", view: "zero" },
      { value: "1", view: "one" },
      { value: "2", view: "Two" }
    ];
   }

  ngOnInit() {

    
  }

}
