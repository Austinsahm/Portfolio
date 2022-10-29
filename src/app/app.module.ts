import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MatIconModule } from '@angular/material/icon';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { KnowMoreComponent } from './more/know-more.component';
import { HeaderComponent } from './widgets/Know-more_widgets/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatIconModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
