import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CardHolderComponent } from './pages/card-holder/card-holder.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CompanyComponent } from './pages/company/company.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { HomeComponent} from './pages/home/home.component';
import { LeadsComponent } from './pages/leads/leads.component';
import { LoginComponent } from './pages/login/login.component';
import { VirtualRoomComponent } from './pages/virtual-room/virtual-room.component';
import { WelcomeComponent} from './pages/welcome/welcome.component';
import { BaseComponent } from './templates/base/base.component';
import { InternalComponent } from './templates/internal/internal.component';
import { SecondComponent } from './templates/second/second.component';
import { WizardComponent } from './templates/wizard/wizard.component';

const routes: Routes = [{
  path: 'login',
  component: SecondComponent,
  children: [
    {
      path: '',
      component: LoginComponent,
    },
  ]
}, {
  path: 'app/wizards',
  component: WizardComponent,
  children: [
    {
      path: 'create-card',
      component: CreateCardComponent,
    }]
  },
  {
  path: 'app',
  component: InternalComponent,
  children: [
    {
      path: 'cards',
      component: CardsComponent,
    },
    {
      path: 'card-holder',
      component: CardHolderComponent,
    },
    {
      path: 'leads',
      component: LeadsComponent,
    },
    {
      path: 'customers',
      component: CustomersComponent,
    },
    {
      path: 'virtual-room',
      component: VirtualRoomComponent,
    },
    {
      path: 'company',
      component: CompanyComponent,
    },
    {
      path: '',
      component: HomeComponent,
    },
  ]
}, {
  path: '',
  component: BaseComponent,
  children: [
    {
      path: '**',
      component: WelcomeComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
