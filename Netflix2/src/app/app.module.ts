import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { SeriesComponent } from './pages/series/series.component';
import { CardSerieComponent } from './components/card-serie/card-serie.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { CardEpisodiosComponent } from './components/card-episodios/card-episodios.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ContentComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    SeriesComponent,
    CardSerieComponent,
    EpisodiosComponent,
    CardEpisodiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
