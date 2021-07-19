import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteRoutingModule } from './teste-routing.module';
import { TesteComponent } from './teste/teste.component';
import {MaterialModule} from "../material/material.modules";
import { TestedialogComponent } from './testedialog/testedialog.component';


@NgModule({
  declarations: [
    TesteComponent,
    TestedialogComponent
  ],
  imports: [
    CommonModule,
    TesteRoutingModule,
    MaterialModule
  ]
})
export class TesteModule { }
