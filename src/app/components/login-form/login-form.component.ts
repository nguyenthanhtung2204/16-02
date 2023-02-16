import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eveIcon: string = "fas fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb :FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
        username : ['',Validators.required],
        password : ['',Validators.required],
    })
  }

  showPass(){
    this.isText = !this.isText;
    this.isText ? this.eveIcon = "fa-eye" : this.eveIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      //send the obj to database
    }
    else{
      console.log("Form is not valid")
      //throw the error using toaster and with required fields
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
