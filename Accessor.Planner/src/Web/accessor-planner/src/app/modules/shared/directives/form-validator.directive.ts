import { Directive, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[formValidator]'
})
export class FormValidatorDirective implements OnInit {

  @Input('formValidator') control: FormControl;

  constructor() { }

  ngOnInit(): void {
    console.log(this.control)
  }

  
}
