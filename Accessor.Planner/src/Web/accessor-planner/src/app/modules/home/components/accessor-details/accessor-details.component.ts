import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessor-details',
  templateUrl: './accessor-details.component.html',
  styleUrls: ['./accessor-details.component.css']
})
export class AccessorDetailsComponent implements OnInit {

  constructor() { }

  @Input() public image: string;
  @Input() public complement: string;
  @Input() public title: string;
  @Input() public content: string;
  
  @Input() order: string = '';

  ngOnInit(): void {
  }

}
