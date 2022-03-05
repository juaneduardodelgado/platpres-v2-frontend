import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input('aligned') aligned: string|null = null; 

  constructor() { }

  get alignedClass(): string {
    return this.aligned === 'centered' ? this.aligned : '';
  }

  ngOnInit(): void {
  }

}
