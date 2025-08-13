import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Gallery } from './gallery/gallery';
import { Services } from './services/services';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'gallery', component: Gallery },
  { path: 'services', component: Services },
  { path: 'login', component: Login },
];
