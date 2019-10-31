import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card2-template',
  templateUrl: './card2-template.component.html',
  styleUrls: ['./card2-template.component.scss']
})
export class Card2TemplateComponent implements OnInit {

  @Input() category:string;
  @Input() title:string;
  @Input() price:number;
  constructor() { }

  ngOnInit() {
  }

}
