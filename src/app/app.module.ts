import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ReactiveFormsModule } from "@angular/forms";
import { AboutPageComponent } from "./about-page/about-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArtItemComponent } from "./art-item/art-item.component";
import { ArtListComponent } from "./art-list/art-list.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { EndeavourItemComponent } from "./endeavour-item/endeavour-item.component";
import { EndeavoursListComponent } from "./endeavours-list/endeavours-list.component";
import { ExtrasPageComponent } from "./extras-page/extras-page.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectsPageComponent } from "./projects-page/projects-page.component";
import { SplashPageComponent } from "./splash-page/splash-page.component";

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
    EndeavoursListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "neo-portfolio" }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
