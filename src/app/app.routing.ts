import { Routes, RouterModule } from '@angular/router';
import {ClientViewerComponent} from './client-viewer/client-viewer.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ClientViewerComponent},
  { path: '**', component: ClientViewerComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
