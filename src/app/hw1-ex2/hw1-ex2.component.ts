import { Component, OnInit } from '@angular/core';
import { Phone } from './Phone';
import { Person } from './Person';

@Component({
  selector: 'app-hw1-ex2',
  templateUrl: './hw1-ex2.component.html',
  styleUrls: ['./hw1-ex2.component.css']
})
export class HW1EX2Component implements OnInit 
{
  private uziel: Person = new Person("Uziel", 26);
  private michal: Person = new Person("Michal", 27);

  private phoneU1: Phone = new Phone("050-024-0249", "09-177-1096", null);
  private phoneU2: Phone = new Phone("050-024-1740", "09-177-1625", null);
  private phoneM1: Phone = new Phone("052-118-0558", "08-329-2422", null);
  private phoneM2: Phone = new Phone("052-181-5085", "08-932-2224", null);

  public persons: Person[] = [];

  constructor() 
  {
    this.uziel.addPhone(this.phoneU1).addPhone(this.phoneU2);
    this.michal.addPhone(this.phoneM1).addPhone(this.phoneM2);

    this.persons.push(this.uziel);
    this.persons.push(this.michal);
  }

  ngOnInit() {}
}
