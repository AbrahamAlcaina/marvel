import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';
import { HeaderComponent } from './header/header.component';
import { SearchHeroComponent } from './search-hero/searchHero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesEffects } from './heroes/effects';
import { HeroesConnectorComponent } from './heroes/heroes.connector';
import { MatCardModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { HeroesResolver } from './heroes/heroes.resolver';
import { HeroConnectorComponent } from './hero/hero.connector';
import { HeroEffects } from './hero/effects';
import { RelatedHerosComponent, RelatedHerosDialogComponent } from './hero/related.component';
import { RelatedHerosConnectorComponent } from './hero/related.connector';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SearchHeroComponent,
    HeroesConnectorComponent,
    HeroesComponent,
    HeroConnectorComponent,
    HeroComponent,
    RelatedHerosDialogComponent,
    RelatedHerosConnectorComponent,
    RelatedHerosComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects, HeroesEffects, HeroEffects]),
    StoreRouterConnectingModule.forRoot(),
    RouterModule.forRoot(
      routes,
      // { enableTracing: true }
    ),
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [HeroesResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
