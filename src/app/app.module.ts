import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientViewerComponent } from './client-viewer/client-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientInfoComponent,
    ClientViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
