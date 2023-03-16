import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SeriesComponent } from './pages/series/series.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '', component: ContentComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'cadastro', component: CadastroComponent},
      { path: 'login', component: LoginComponent}
    ]
  },
  {
    path: '', component: FullComponent, children:[
      { path: 'series', component: SeriesComponent},
      { path: 'episodios', component: EpisodiosComponent}
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
