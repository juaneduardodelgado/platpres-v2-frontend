import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Card, CardsService } from 'src/app/services/cards.service';
import { StepsService } from 'src/app/services/steps.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  step = 1;
  avatars: any = [{
    id: 1,
    path: '../../../assets/images/avatar-sample.png',
  }, {
    id: 2,
    path: '../../../assets/images/avatar-sample.png',
  }, {
    id: 3,
    path: '../../../assets/images/avatar-sample.png',
  }, {
    id: 4,
    path: '../../../assets/images/avatar-sample.png',
  }, {
    id: 5,
    path: '../../../assets/images/avatar-sample.png',
  }, {
    id: 6,
    path: '../../../assets/images/avatar-sample.png',
  }, {
    id: 7,
    path: '../../../assets/images/avatar-sample.png',
  }, {
    id: 8,
    path: '../../../assets/images/avatar-sample.png',
  }, {
    id: 9,
    path: '../../../assets/images/avatar-sample.png',
  }, {
    id: 10,
    path: '../../../assets/images/avatar-sample.png',
  }];
  selectedAvatar: any;
  uploadedLogo: any;
  uploadedVideo: any;
  heroForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lnames: ['', Validators.required],
    position: ['', Validators.required],
    website: [''],
    email: ['', [Validators.required, Validators.email]],
    cellphone: ['', Validators.required],
  });

  card: Card = {};

  profile: any;

  colorFormControl: FormControl = this.fb.control('#546E7A');
  colorBgFormControl: FormControl =  this.fb.control('#ADD8E6');
  colorBarFormControl: FormControl = this.fb.control('#FFFFFF');

  steps = ['Información personal', 'Elige tu avatar', 'Personaliza', 'Elige una plantilla', 'Finalizar'];

  constructor(private stepService: StepsService, private cardsService: CardsService,
    private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.stepService.setStep(this.step);
    this.stepService.setStepsInfo(this.steps);

    const card = this.cardsService.getCurrentCard();

    if (card) {
      this.card = card;

      this.name?.setValue(card.name);
      this.lnames?.setValue(card.lnames);
      this.email?.setValue(card.email);
      this.position?.setValue(card.position);
      this.cellphone?.setValue(card.cellphone);
      this.website?.setValue(card.website);
      this.colorFormControl?.setValue(card.iconColor);
      this.colorBgFormControl?.setValue(card.bgColor);
      this.colorBarFormControl?.setValue(card.barColor);

      this.uploadedVideo = card.videoPath ? {
        previewSource: environment.MEDIA_URL + card.videoPath,
      } : null;

      this.uploadedLogo = card.logoPath ? {
        path: environment.MEDIA_URL + card.logoPath,
      } : null;
    }

    this.stepService.stepsReplaced$.subscribe((step: any) => {
      if (step && parseInt(step) > 0) {
        if (step <= this.step) {
          this.step = step;
        }
      }
    });
  }

  continue(): void {
    if (this.step === 1) {
      if (!this.heroForm.valid) {
        this.heroForm.markAllAsTouched();
        return;
      } else {
        this.profile = {
          name: this.name?.value,
          lastname: this.lnames?.value,
          position: this.position?.value,
        };
      }
    } else if (this.step === 5) {
      this.card.name = this.name?.value;
      this.card.lnames = this.lnames?.value;
      this.card.email = this.email?.value;
      this.card.position = this.position?.value;
      this.card.cellphone = this.cellphone?.value;
      this.card.website = this.website?.value;
      this.card.iconColor = this.colorFormControl.value;
      this.card.bgColor = this.colorBgFormControl.value;
      this.card.barColor = this.colorBarFormControl.value;

      const logoFiles = this.uploadedLogo && this.uploadedLogo.files ? this.uploadedLogo.files : null;
      const videoFiles = this.uploadedVideo && this.uploadedVideo.files ? this.uploadedVideo.files : null;
      let logo: any = null;
      let video: any = null;

      if (logoFiles) {
        logo = logoFiles.nativeElement && logoFiles.nativeElement.files ? logoFiles.nativeElement.files[0] : null;
      }

      if (videoFiles) {
        video = videoFiles.nativeElement && videoFiles.nativeElement.files ? videoFiles.nativeElement.files[0] : null;
      }
      
      this.cardsService.saveCard(this.card, logo, video)
      .subscribe((res: any) => {
        this.router.navigate(['/app/cards']);
      });
      return;
    }
    this.step = this.step + 1;
    this.stepService.setStep(this.step);
  }

  avatarChanged(avatar: any): void {
    this.selectedAvatar = avatar;
  }

  logoChanged(files: any): void {
    this.uploadedLogo = files;
  }

  videoChanged(files: any): void {
    this.uploadedVideo = files;
  }

  get name() { return this.heroForm.get('name'); }

  get lnames() { return this.heroForm.get('lnames'); }
  
  get position() { return this.heroForm.get('position'); }

  get email() { return this.heroForm.get('email'); }

  get website() { return this.heroForm.get('website'); }

  get cellphone() { return this.heroForm.get('cellphone'); }
}
