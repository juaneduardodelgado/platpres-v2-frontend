import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { LoadingIndicatorService } from './services/loading-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platpres-v2-frontend';
  loading$: Observable<boolean>;

  constructor(private loadingIndicatorService: LoadingIndicatorService, private router: Router) {
    this.loading$ = this.loadingIndicatorService.isLoading$;

    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError,
        ),
        filter(
          (event: any) =>
            event.url.indexOf('/app/') === -1
        )

      )
      .subscribe(event => {
        // If it's the start of navigation, `add()` a loading indicator
        if (event instanceof NavigationStart) {
          this.loadingIndicatorService.start();
          return;
        }

        // Else navigation has ended, so `remove()` a loading indicator
        setTimeout(() => {
          this.loadingIndicatorService.stop();
        }, 1000);
      });
  } 
}
