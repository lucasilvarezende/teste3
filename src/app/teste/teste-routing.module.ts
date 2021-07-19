import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestedialogComponent} from "./testedialog/testedialog.component";

const routes: Routes = [
  {
    path: '',
    component: TestedialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteRoutingModule { }
