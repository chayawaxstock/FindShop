import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mdb-image-modal',
  templateUrl: './mdb-image-modal.component.html',
  styleUrls: ['./mdb-image-modal.component.scss']
})
export class MdbImageModalComponent implements OnInit {

  @Input() modalImages:string;
  
  constructor() { }

  ngOnInit() {
  }

}
