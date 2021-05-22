import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  @Input('loading') public set setLoading(value: boolean) {
    setTimeout(() => {
      this.loading = value;
    }, 100);
  }

  public loading: boolean = true;
  
  ngOnInit(): void {
  }
}
