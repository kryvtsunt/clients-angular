import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientInfoComponent} from './client-info/client-info.component';
import {ClientViewerComponent} from './client-viewer/client-viewer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientInfoComponent,
    ClientViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
