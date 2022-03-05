import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { GridComponent } from './components/grid/grid.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BaseComponent } from './templates/base/base.component';
import { InternalComponent } from './templates/internal/internal.component';
import { WizardComponent } from './templates/wizard/wizard.component';
import { SecondComponent } from './templates/second/second.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserLoggedInComponent } from './components/user-logged-in/user-logged-in.component';
import { WhiteCardComponent } from './components/white-card/white-card.component';
import { MetricCardComponent } from './components/metric-card/metric-card.component';
import { PpCardComponent } from './components/pp-card/pp-card.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CardHolderComponent } from './pages/card-holder/card-holder.component';
import { LeadsComponent } from './pages/leads/leads.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { VirtualRoomComponent } from './pages/virtual-room/virtual-room.component';
import { CompanyComponent } from './pages/company/company.component';
import { PpCardFullComponent } from './components/pp-card-full/pp-card-full.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareCardComponent } from './pages/share-card/share-card.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { StepsComponent } from './components/steps/steps.component';
import { PhotoPickerComponent } from './components/photo-picker/photo-picker.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { NgxColorsModule } from 'ngx-colors';
import { TmplSelectorComponent } from './components/tmpl-selector/tmpl-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    GridComponent,
    LogoComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserLoggedInComponent,
    LoaderComponent,
    BaseComponent,
    InternalComponent,
    WizardComponent,
    SecondComponent,
    LoginComponent,
    WhiteCardComponent,
    MetricCardComponent,
    PpCardComponent,
    CardsComponent,
    CardHolderComponent,
    LeadsComponent,
    CustomersComponent,
    VirtualRoomComponent,
    CompanyComponent,
    PpCardFullComponent,
    ShareCardComponent,
    CreateCardComponent,
    StepsComponent,
    PhotoPickerComponent,
    UploadFileComponent,
    TmplSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxColorsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
