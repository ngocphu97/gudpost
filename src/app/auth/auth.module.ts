import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { containers } from './containers';
import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    containers,
    components
  ]
})
export class AuthModule { }
