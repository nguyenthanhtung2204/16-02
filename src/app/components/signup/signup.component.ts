import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eveIcon: string = "fas fa-eye-slash"
  signUpForm!: FormGroup;
  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firtName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })

  }
  showPass(){
    this.isText = !this.isText;
    this.isText ? this.eveIcon = "fa-eye" : this.eveIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onSigup(){
    if(this.signUpForm.valid){
      // perform login for sigup
      console.log(this.signUpForm.value)
    }else{
      //login for throwing error
      this.validateAllFormFileds(this.signUpForm)
    }
  }
  private validateAllFormFileds(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if(control instanceof FormControl){
          control.markAsDirty({ onlySelf:true });
        }
        else if ( control instanceof FormGroup ){
          this.validateAllFormFileds(control)
        }
    })
  }
}
