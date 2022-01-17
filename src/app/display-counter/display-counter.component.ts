import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css']
})
export class DisplayCounterComponent implements OnInit {

  @Input() counter: any;

  constructor() { }

  ngOnInit(): void {
  }

}
