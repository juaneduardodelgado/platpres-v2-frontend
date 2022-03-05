import { Component, OnInit } from '@angular/core';
import { LoadingIndicatorService } from 'src/app/services/loading-indicator.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private loadingIndicatorService: LoadingIndicatorService) { }

  ngOnInit(): void {
  }

  startFlow(): void {
    this.loadingIndicatorService.start();
    setTimeout(() => {
      this.loadingIndicatorService.stop();
    }, 5000);
  }

}
