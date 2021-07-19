import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TesteComponent} from "../teste/teste.component";

@Component({
  selector: 'app-testedialog',
  templateUrl: './testedialog.component.html',
  styleUrls: ['./testedialog.component.css']
})
export class TestedialogComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(TesteComponent)
  }

}
