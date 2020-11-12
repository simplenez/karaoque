import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {HomeComponent} from './components/home.component';
import {SearchComponent} from './components/search.component';
import {StatusComponent} from './components/status.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {VlcService} from './services/vlc.service';
import {FormsModule} from '@angular/forms';
import {VlcEffect} from './effects/vlc.effect';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([VlcEffect]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    FormsModule
  ],
  providers: [VlcService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
