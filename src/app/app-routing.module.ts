import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routable components
import { SplashPageComponent } from './splash-page/splash-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ExtrasPageComponent } from './extras-page/extras-page.component';

const routes: Routes = [
  { path: '', component: SplashPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'projects', component: ProjectsPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'extras', component: ExtrasPageComponent}
  // { path: '**', component: ProdRouteHandlerComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
