import { Routes, RouterModule } from '@angular/router';
import {ClientViewerComponent} from './client-viewer/client-viewer.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full'},
  { path: 'client', component: ClientViewerComponent},
  { path: '**', component: ClientViewerComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
