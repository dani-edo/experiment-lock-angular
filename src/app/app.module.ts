import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShareModule } from 'ngx-sharebuttons';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    NgxJsonLdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
