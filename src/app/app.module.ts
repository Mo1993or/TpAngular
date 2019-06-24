import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProfilComponent } from './component/profil/profil.component';
import { LoginComponent } from './component/login/login.component';
import { SComponent } from './s/s.component';
import { MeteoComponent } from './component/meteo/meteo.component';
import { ListeMeteoComponent } from './component/liste-meteo/liste-meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfilComponent,
    LoginComponent,
    SComponent,
    MeteoComponent,
    ListeMeteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
