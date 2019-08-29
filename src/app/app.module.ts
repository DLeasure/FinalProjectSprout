import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SproutHomeComponent } from './sprout-home/sprout-home.component';
// import { EarthService } from './earth.service'

@NgModule({
  declarations: [
    AppComponent,
    SproutHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
