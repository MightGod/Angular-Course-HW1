import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw1-ex1',
  templateUrl: './hw1-ex1.component.html',
  styleUrls: ['./hw1-ex1.component.css']
})
export class HW1EX1Component implements OnInit {

  public text: string = "";
  public texts: string[] = [];
  public size: string = "small";

  public addText(text: string) : void
  {
    this.texts.push(text);
    this.text = "";
  }

  public biggerFont(checked: boolean) : void
  {
      this.size = (checked) ? "large" : "small";
  }

  constructor() { }

  ngOnInit() {
  }

}
