import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { AppFilterTextboxComponent } from "./customers-list/filter-textbox.component";

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    AppFilterTextboxComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    CustomersComponent
  ]
})
export class CustomersModule { }
