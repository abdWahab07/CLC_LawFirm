import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { NewsComponent } from './news/news.component';
import { FirmComponent } from './firm/firm.component';
import { LawyersComponent } from './lawyers/lawyers.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HomeCardsComponent,
    TestimonyComponent,
    NewsComponent,
    FirmComponent,
    LawyersComponent,
    PracticeAreasComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
