import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Card, CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: any = [1, 2, 3, 4, 5, 6, 7, 8];
  cards$: Observable<Card[]> | undefined;
  presentations: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  cardsEnabled = true;

  constructor(private cardsService: CardsService, private router: Router) { }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getCards();
  }

  editCard(card: Card): void {
    this.cardsService.setCurrentCard(card);
    this.router.navigate(['/app/wizards/create-card']);
  }
}
