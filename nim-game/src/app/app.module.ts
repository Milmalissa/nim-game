import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import { SticksComponent } from './components/sticks/sticks.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    SticksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
