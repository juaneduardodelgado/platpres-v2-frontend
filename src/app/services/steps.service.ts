import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { delay, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  step = 1;
  stepsInfo: any;
  private readonly _currentStep$: Subject<number> = new BehaviorSubject<number>(1);
  private readonly _stepsInfo$: Subject<any> = new BehaviorSubject<any>([]); 
  private readonly _stepReplaced$: Subject<any> = new BehaviorSubject<any>([]); 
   
  constructor() { }

  setStepsInfo(steps: any): void {
    this.stepsInfo = steps;

    this._stepsInfo$.next(this.stepsInfo);
  }

  setStep(step: number): void {
    this.step = step;
    this.emit();
  }

  overwriteStep(step: number): void {
    this._stepReplaced$.next(step);
    this.step = step;
  }

  /** 
     * Emit the current step 
     */ 
  private emit() { 
    this._currentStep$.next(this.step);
  }
  
  // Observable to expose the state of the loading indicator. The value is emitted only when it changes. 
  readonly currentStep$: Observable<number> = this._currentStep$.pipe( 
    distinctUntilChanged(), 
    delay(0) 
  );

  readonly stepsInfo$: Observable<number> = this._stepsInfo$.pipe( 
    distinctUntilChanged(), 
    delay(0) 
  );

  readonly stepsReplaced$: Observable<number> = this._stepReplaced$.pipe( 
    distinctUntilChanged(), 
    delay(0) 
  );
}
