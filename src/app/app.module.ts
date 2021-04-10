import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpacexComponent } from './components/spacex/spacex.component';
import { SpaceListComponent } from './space-list/space-list.component';
import { SpaceDetailComponent } from './space-detail/space-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacexComponent,
    SpaceListComponent,
    SpaceDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
