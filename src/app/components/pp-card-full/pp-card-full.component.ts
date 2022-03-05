import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pp-card-full',
  templateUrl: './pp-card-full.component.html',
  styleUrls: ['./pp-card-full.component.scss']
})
export class PpCardFullComponent implements OnInit {
  @Input('margin') margin: string = 'regular';

  constructor() { }

  ngOnInit(): void {
  }

}
