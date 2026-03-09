import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component.js';
import { EvelynComponent } from './components/evelyn/evelyn.component.js';
import { EvelynAmigaComponent } from './components/evelyn-amiga/evelyn-amiga.component.js';
import { HnaEvelynComponent } from './components/hna-evelyn/hna-evelyn.component.js';
import { ZoeComponent } from './components/zoe/zoe.component.js';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'evelyn', component: EvelynAmigaComponent },
  { path: 'evelyn-especial', component: EvelynComponent },
  { path: 'hna-evelyn', component: HnaEvelynComponent },
  { path: 'zoe', component: ZoeComponent },
  { path: '**', redirectTo: '' }
];
