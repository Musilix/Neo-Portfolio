import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { SplashThreeSectionComponent } from './splash-three-section/splash-three-section.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    SplashThreeSectionComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
