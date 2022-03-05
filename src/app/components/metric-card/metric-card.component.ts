import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.scss']
})
export class MetricCardComponent implements OnInit {
  @Input('theme') theme: string = 'success';
  @Input('icon') icon: string | undefined;
  @Input('title') title: string | undefined;
  @Input('value') value: string | undefined;

  constructor() { }

  get iconClass(): string {
    return this.icon ? `fa-${this.icon}` : 'fa-check';
  }

  ngOnInit(): void {
  }

}
