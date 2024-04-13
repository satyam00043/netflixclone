import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { MoviDetailsComponent } from './component/movi-details/movi-details.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviApiServiceService } from './service/movi-api-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MoviDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [MoviApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
