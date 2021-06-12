import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[formValidator]'
})
export class FormValidatorDirective implements OnInit {
  
  @Input() public control: FormControl;
  @Input() public set form(form: FormGroup) {

    form.valueChanges.subscribe(() => {
      if(!this.control.valid && this.control.touched) {
        this.color = 'red'
        this.opacity = '1';
      }
      else {
        this.opacity = '0';
      }
    });
  };
    
  @HostBinding('style.color') private color: string; 
  @HostBinding('style.opacity') private opacity: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
