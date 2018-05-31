import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import {  CreateBillsService } from '../../services/createbills.service';
import { HttpClientModule } from '@angular/common/http';


export const routes = [
  { path: '', component: RegisterComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
     CreateBillsService
  ]
})
export class RegisterModule { }
