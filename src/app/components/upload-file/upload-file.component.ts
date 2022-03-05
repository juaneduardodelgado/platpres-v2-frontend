import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('subtitle') subtitle: string = '';
  @Input('accept') acceptedExtensions: string = 'image/*';

  @ViewChild('file') elementView: ElementRef | undefined;

  previewSource: SafeResourceUrl = '';

  @Output() selectedFiles: EventEmitter<any> = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  isImage(): boolean {
    return this.acceptedExtensions.indexOf('image') > -1;
  }

  isVideo(): boolean {
    return this.acceptedExtensions.indexOf('video') > -1;
  }

  deleteFiles(): void {
    if (!this.elementView) {
      return;
    }
    this.elementView.nativeElement.value = '';
    this.previewSource = '';
  }

  fileSelected(): void {
    if (!this.elementView) {
      return;
    }

    const [file] = this.elementView.nativeElement.files;
    if (file) {
      this.previewSource = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));

      this.selectedFiles.emit({
        files: this.elementView,
        previewSource: this.previewSource,
      });
    }
  }
}
