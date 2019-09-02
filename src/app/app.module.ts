import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { SproutHomeComponent } from './sprout-home/sprout-home.component';
import { ReduceComponent } from './reduce/reduce.component';
// import { EarthService } from './earth.service'

@NgModule({
  declarations: [
    AppComponent,
    SproutHomeComponent,
    ReduceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
