import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-white-card',
  templateUrl: './white-card.component.html',
  styleUrls: ['./white-card.component.scss']
})
export class WhiteCardComponent implements OnInit {

  @ContentChild(TemplateRef) contentTemplate: TemplateRef<any> | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
