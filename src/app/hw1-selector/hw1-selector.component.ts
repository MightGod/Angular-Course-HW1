import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1-selector',
  templateUrl: './hw1-selector.component.html',
  styleUrls: ['./hw1-selector.component.css']
})
export class HW1SELECTORComponent implements OnInit {

  public exercise1: boolean = false;
  public exercise2: boolean = false;

  constructor() { }

  public handleChange(radio: string) : void
  {
    switch(radio)
    {
      case "ex1":
      {
        this.exercise1 = true;
        this.exercise2 = false;
        break;
      }
      case "ex2":
      {
        this.exercise1 = false;
        this.exercise2 = true;
        break;
      }
    }
  }

  ngOnInit() {
  }

}
