import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routable components
import { SplashPageComponent } from './splash-page/splash-page.component';

const routes: Routes = [
  { path: '', component: SplashPageComponent},
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
