import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-choose-register',
  templateUrl: './choose-register.component.html',
  styleUrls: ['./choose-register.component.css']
})
export class ChooseRegisterComponent implements OnInit {

  constructor() { }

  public acessorImage: string = '../../../../../assets/home/chose-register/accessor.jpeg';
  public providerImage: string = '../../../../../assets/home/chose-register/provider.jpg';
  public clientImage: string = '../../../../../assets/home/chose-register/client.png';

  public content: string = "Texto de exemplo depois modificar esse texto para fazer sentido com a aplicação"

  ngOnInit(): void {
  }


}
