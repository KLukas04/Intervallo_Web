import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiButtonModule, TUI_BUTTON_OPTIONS } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { AppleDownloadBtnComponent } from './components/apple-download-btn/apple-download-btn.component';
import { CommunityFeedbackComponent } from './components/community-feedback/community-feedback.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ImageTextComponent } from './components/image-text/image-text.component';
import { ShortOverviewComponent } from './components/short-overview/short-overview.component';
import { FooterComponent } from './components/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      TuiRootModule,
      BrowserAnimationsModule,
      TuiButtonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
