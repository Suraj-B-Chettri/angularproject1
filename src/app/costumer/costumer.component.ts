import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.css']
})
export class CostumerComponent implements OnInit {

  firstName : string = "";
  lastName : string = "";
  age :number = 3;

  constructor() { }

  ngOnInit() {
  }

}
