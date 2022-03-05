import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  iconClass = 'fa-check';
  currentStep = 1;

  steps: any = [];
  constructor(private stepService: StepsService, private location: Location) { }

  ngOnInit(): void {
    this.stepService.currentStep$.subscribe((step) => {
      this.currentStep = step;
    });

    this.stepService.stepsInfo$.subscribe((steps) => {
      this.steps = steps;
    });
  }

  back(): void {
    this.location.back();
  }

  emitStep(idx: number) {
    if (idx === this.currentStep) {
      return;
    }
    this.stepService.overwriteStep(idx + 1);
  }
}
