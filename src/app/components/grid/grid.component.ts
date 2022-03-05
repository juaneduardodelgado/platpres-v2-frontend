import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input('gridSize') gridSize: string|null = null; 

  constructor() { }

  get sizeClass(): string {
    return this.gridSize === 'small' ? this.gridSize : '';
  }

  ngOnInit(): void {
  }

}
