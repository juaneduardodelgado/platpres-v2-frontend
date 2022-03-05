import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-picker',
  templateUrl: './photo-picker.component.html',
  styleUrls: ['./photo-picker.component.scss']
})
export class PhotoPickerComponent implements OnInit {
  selectedIdx: number | undefined;

  @Input('photos') photos: any;
  @Output() selectedPhoto: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectPhoto(idx: number): void {
    this.selectedIdx = idx;
    this.selectedPhoto.emit(this.photos[idx]);
  } 
}
