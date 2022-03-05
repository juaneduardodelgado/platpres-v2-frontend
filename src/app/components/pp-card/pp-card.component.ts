import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { Card } from 'src/app/services/cards.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pp-card',
  templateUrl: './pp-card.component.html',
  styleUrls: ['./pp-card.component.scss']
})
export class PpCardComponent implements OnInit, AfterViewInit {
  contentWidth: number | undefined;
  contentHeight: number | undefined;
  fontSize: number | undefined;
  muted: string = 'muted';

  @Input('fullFg') fullFg: boolean = false;
  @Input('iconColor') iconColor: string = '#1E192F';
  @Input('bgColor') bgColor: string = '#ADD8E6';
  @Input('barColor') barColor: string = '#FFFFFF';
  @Input('logo') logo: any;
  @Input('video') video: any;
  @Input('profile') profile: any = {
    path: '../../../assets/images/baseball--player.png',
    name: 'Camilo',
    lastname: 'Gómez',
    position: 'Gerente',
  };

  @Input() set card(value: Card) {
    this.profile = {
      name: value.name,
      lastname: value.lnames,
      position: value.position,
      path: '../../../assets/images/baseball--player.png',
    };
    this.logo = value && value.logoPath ? {
      path: environment.MEDIA_URL + value.logoPath,
    } : null;

    this.video = value && value.videoPath ? {
      previewSource: environment.MEDIA_URL + value.videoPath,
    } : null;

    this.barColor = value && value.barColor ? value.barColor : this.barColor;
    this.bgColor = value && value.bgColor ? value.bgColor : this.bgColor;
    this.iconColor = value && value.iconColor ? value.iconColor : this.iconColor;
  }

  @ViewChild('card') elementView: ElementRef | undefined;
  @ViewChild('bar') elementBar: ElementRef | undefined;
  @ViewChild('content') elementContent: ElementRef | undefined;
  @ViewChild('position') elementPosition: ElementRef | undefined;
  @ViewChild('videoEl') elementVideo: ElementRef | undefined;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.calc();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.calc();
  }

  calc(): void {
    if (this.elementView) {
      this.contentWidth = this.elementView.nativeElement.offsetWidth;

      if (this.fullFg) {
        this.contentWidth = this.contentWidth ? this.contentWidth + 48 : this.contentWidth;
        this.renderer.setStyle(this.elementView.nativeElement, 'margin-left', `-24px`);
        this.renderer.setStyle(this.elementView.nativeElement, 'margin-right', `-24px`);
        this.renderer.setStyle(this.elementView.nativeElement, 'margin-top', `-24px`);
        this.renderer.setStyle(this.elementView.nativeElement, 'width', `calc(100% + 48px)`);
      }

      if (this.contentWidth) {
        this.contentHeight = Math.round(0.63 * this.contentWidth);
        this.fontSize = (this.contentWidth / 16 / 24);
        this.renderer.setStyle(this.elementView.nativeElement, 'height', `${this.contentHeight}px`);
      }
    }

    if (this.elementBar && this.fontSize && this.contentWidth) {
      this.renderer.setStyle(this.elementBar.nativeElement, 'width', `${0.94 * this.contentWidth}px`);
      this.renderer.setStyle(this.elementBar.nativeElement, 'margin-left', `${0.03 * this.contentWidth}px`);
      this.renderer.setStyle(this.elementBar.nativeElement, 'margin-right', `${0.03 * this.contentWidth}px`);

      const container = this.elementBar.nativeElement.children[0];
      this.renderer.setStyle(container, 'font-size', `${this.fontSize}rem`);
      this.renderer.setStyle(container, 'margin-left', `${this.fontSize}rem`);
      this.renderer.setStyle(container, 'margin-right', `${this.fontSize}rem`);

      for(let children of container.children) {
        this.renderer.setStyle(children, 'margin-right', `${this.fontSize}rem`);
      } 
    }

    if (this.elementContent && this.elementPosition && this.fontSize && this.contentWidth) {
      this.renderer.setStyle(this.elementContent.nativeElement, 'font-size', `${this.fontSize}rem`);
      this.renderer.setStyle(this.elementContent.nativeElement, 'line-height', `${this.fontSize}rem`);
      this.renderer.setStyle(this.elementPosition.nativeElement, 'font-size', `${0.7 * this.fontSize}rem`);
      this.renderer.setStyle(this.elementPosition.nativeElement, 'line-height', `${0.7 * this.fontSize}rem`);
    }
  }

  toggleSound(event: any) {
    event.stopPropagation();
    this.muted = this.muted === 'muted' ? '' : 'muted';
  }

}
