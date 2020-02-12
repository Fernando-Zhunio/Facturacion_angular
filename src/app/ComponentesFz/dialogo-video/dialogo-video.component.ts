import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-video',
  templateUrl: './dialogo-video.component.html',
  styleUrls: ['./dialogo-video.component.scss']
})
export class DialogoVideoComponent implements OnInit {

  constructor(private thisDialog:MatDialogRef<DialogoVideoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
