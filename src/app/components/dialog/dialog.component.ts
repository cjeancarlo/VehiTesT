
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AboutComponent, {
      data: {}
    });

  }

}

