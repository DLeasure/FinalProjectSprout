import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SproutHomeComponent } from './sprout-home/sprout-home.component';
import { RecycleComponent } from './recycle/recycle.component';
// import { EarthService } from './earth.service'

@NgModule({
  declarations: [
    AppComponent,
    SproutHomeComponent,
    RecycleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
