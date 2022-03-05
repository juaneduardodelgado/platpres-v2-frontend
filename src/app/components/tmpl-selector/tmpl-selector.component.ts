import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tmpl-selector',
  templateUrl: './tmpl-selector.component.html',
  styleUrls: ['./tmpl-selector.component.scss']
})
export class TmplSelectorComponent implements OnInit {
  tmpls: any = ['tmpl1'];
  selectedIdx: number | undefined;
  @Output() selectedTmpl: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deselect(): void {
    this.selectedIdx = undefined;
  }

  selectTmpl(idx: number): void {
    this.selectedIdx = idx;
    this.selectedTmpl.emit(this.tmpls[idx]);
  } 
}
