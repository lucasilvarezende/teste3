import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<TesteComponent>
  ) { }

  ngOnInit(): void {
  }

}
