import { Component, OnInit } from '@angular/core';
import { AccessorDetails } from '../../model/accessor-details.model';
import { homeDetails } from './home-details';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor() { }

  public accessorDetails: AccessorDetails[] = homeDetails;
  ngOnInit(): void {
  }

 
}
