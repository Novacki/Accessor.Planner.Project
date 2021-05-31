import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }
  public onLoad: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  @Input('loading') public set setLoading(value: boolean) {
    this.onLoad.next(value);
  }

  public loading: boolean = false;
  
  ngOnInit(): void {
 
  }
}
