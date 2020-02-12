import { Component, OnInit } from '@angular/core';
import { DialogoVideoComponent } from '../dialogo-video/dialogo-video.component';
import { MatDialog } from '@angular/material';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.scss']
})
export class PlataformasComponent implements OnInit {

  constructor(private dialogVideo: MatDialog) { }

  ngOnInit() {
  }

  openDialogUpdate() {
    let data:any;
    let dialogo = this.dialogVideo.open(DialogoVideoComponent,
      {
        width: '70vw',
        data
      });
    // return dialogo;
  }
} 
