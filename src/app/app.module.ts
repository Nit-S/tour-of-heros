import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }          from '@angular/http' ;

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.coomponent';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,    // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ]
})

export class AppModule { }
