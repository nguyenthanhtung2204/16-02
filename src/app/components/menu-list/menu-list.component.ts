import { LoginFormComponent } from './../login-form/login-form.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Overlay} from '@angular/cdk/overlay';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
  constructor(private dia: MatDialog, private over: Overlay){}
  logintest(){
    this.dia.open(LoginFormComponent,{
      width: '90%',
      height: '90%',

    })
  }
}
