import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable, of, Subject } from 'rxjs';
import { catchError, delay, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';

export interface Card {
    id?: number;
    name?: string;
    lnames?: string;
    position?: string;
    website?: string;
    email?: string;
    cellphone?: string;
    logoPath?: string;
    videoPath?: string;
    iconColor?: string;
    bgColor?: string;
    barColor?: string;
}

const API_URL_CARDS = 'http://localhost:4200/api/cards/';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
    card: Card | undefined;
    
    constructor(private httpClient: HttpClient) { }

    setCurrentCard(card: Card) {
        this.card = card;
    }

    getCurrentCard(): Card | undefined {
        return this.card;
    }

    getCards(): Observable<Card[]>{
        // const params = new HttpParams({fromString: 'name=term'});
        return this.httpClient.request<Card[]>('GET', API_URL_CARDS, {responseType:'json'});
    }

    saveCard(card: Card, logo: File, video: File): Observable<{}> {
        const url = `${API_URL_CARDS}${card && card.id ? '/' + card.id : ''}`;
        const httpOptions: any = {};
        let observable: Observable<any> | undefined;

        if (card && card.id) {
            observable = this.httpClient.put(url, card, httpOptions);
        } else {
            observable = this.httpClient.post(url, card, httpOptions);
        }

        let cardId: any = null;
        return observable.pipe(
            mergeMap((resp: Observable<Card>) => {
                 card = resp as Card;
                 cardId = card && card.id ? card.id : null;
                if (logo) {
                    const logoUrl = `${API_URL_CARDS}/${cardId}/logo`;
                    return this.uploadFile(logoUrl, logo);
                }

                return of(resp);
            }),
            mergeMap((resp: Observable<any>) => {
               if (video) {
                   const videoUrl = `${API_URL_CARDS}/${cardId}/video`;
                   return this.uploadFile(videoUrl, video);
               }

               return of(resp);
           }));
    }

    uploadFile(url: string, file: File): Observable<any> {
        let formData = new FormData();
        if (file) {
            formData.append('file', file);
            formData.append('name', file.name);
        }
        return this.httpClient.post(url, formData);
    }
}
