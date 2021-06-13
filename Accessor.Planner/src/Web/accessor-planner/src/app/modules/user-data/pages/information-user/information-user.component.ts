import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-user',
  templateUrl: './information-user.component.html',
  styleUrls: ['./information-user.component.css']
})
export class InformationUserComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  public user = JSON.parse(localStorage.getItem('client')) ? JSON.parse(localStorage.getItem('client')) :
     JSON.parse(localStorage.getItem('provider'));
}
