import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card1-template',
  templateUrl: './card1-template.component.html',
  styleUrls: ['./card1-template.component.scss']
})
export class Card1TemplateComponent implements OnInit {

  @Input() imageString:string;
  @Input() title:string;
  @Input() id:number;

  
  constructor() { }

  ngOnInit() {
  }

}
