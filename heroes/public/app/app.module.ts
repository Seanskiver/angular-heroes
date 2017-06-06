//// Angular Components
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Angular forms module allows directives such as NgModel on input fields
import { FormsModule } from '@angular/forms';
// For HTTP requests to server
import { HttpModule } from '@angular/http';
// For Routing
import { RouterModule } from '@angular/router';

// My Routing module 
import { AppRoutingModule } from './app-routing.module';

//// My Components
import { AppComponent }         from './app.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }  from './hero-search.component';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [ 
    BrowserModule,
    // import the forms module before binding to with [(ngModel)]
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,    
  ],
  
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
  ],
  
  providers: [
    HeroService,
  ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
