import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() public image: string;
  @Input() public title: string;
  @Input() public content: string;
  ngOnInit(): void {
  }

}
