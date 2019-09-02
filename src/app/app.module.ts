import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SproutHomeComponent } from './sprout-home/sprout-home.component';
import { ReduceComponent } from './reduce/reduce.component';
import { ReuseComponent } from './reuse/reuse.component';
import { RecycleComponent } from './recycle/recycle.component';
// import { EarthService } from './earth.service'

@NgModule({
  declarations: [
    AppComponent,
    SproutHomeComponent,
    ReduceComponent,
    ReuseComponent,
    RecycleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
