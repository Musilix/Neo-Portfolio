import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ExtrasPageComponent } from './extras-page/extras-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ArtListComponent } from './art-list/art-list.component';
import { ArtItemComponent } from './art-item/art-item.component';
import { EndeavourItemComponent } from './endeavour-item/endeavour-item.component';
import { EndeavoursListComponent } from './endeavours-list/endeavours-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    ExtrasPageComponent,
    ContactPageComponent,
    NavBarComponent,
    ProjectListComponent,
    ArtListComponent,
    ArtItemComponent,
    EndeavourItemComponent,
    EndeavoursListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
