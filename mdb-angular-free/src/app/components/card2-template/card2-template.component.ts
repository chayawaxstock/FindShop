import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card2-template',
  templateUrl: './card2-template.component.html',
  styleUrls: ['./card2-template.component.scss']
})
export class Card2TemplateComponent implements OnInit {

  @Input() category:string;
  @Input() title:string;
  @Input() price:number;
  @Input() image:any;
  @Input() id: number;
  @Output() chooseObject = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  choose() {
    this.chooseObject.emit(this.id);
  }
}
