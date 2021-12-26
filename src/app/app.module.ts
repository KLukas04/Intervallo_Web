import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiButtonModule } from "@taiga-ui/core";
import { TuiAccordionComponent, TuiAccordionModule } from "@taiga-ui/kit";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { AppleDownloadBtnComponent } from './components/apple-download-btn/apple-download-btn.component';
import { CommunityFeedbackComponent } from './components/community-feedback/community-feedback.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ImageTextComponent } from './components/image-text/image-text.component';
import { ShortOverviewComponent } from './components/short-overview/short-overview.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { SupportComponent } from './components/support/support.component';
import { NutzungsbedingungenComponent } from './components/nutzungsbedingungen/nutzungsbedingungen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'support', component: SupportComponent },
  { path: 'nutzungsbedingungen', component: NutzungsbedingungenComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroPageComponent,
    AppleDownloadBtnComponent,
    CommunityFeedbackComponent,
    QuoteComponent,
    ImageTextComponent,
    ShortOverviewComponent,
    FooterComponent,
    HomeComponent,
    DatenschutzComponent,
    SupportComponent,
    NutzungsbedingungenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    TuiRootModule,
    BrowserAnimationsModule,
    TuiButtonModule,
    TuiAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
