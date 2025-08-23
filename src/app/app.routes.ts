import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Gallery } from './gallery/gallery';
import { Services } from './services/services';
import { Login } from './login/login';
import { DigitalMarketing } from './services/digital-marketing/digital-marketing';
import { Contact } from './contact/contact';
import { SoftwareDevelopment } from './software-development/software-development';
import { BrandingAnalytics } from './services/branding-analytics/branding-analytics';
import { AdvertisingPage } from './advertising-page/advertising-page';
import { GeneralIt } from './services/general-it/general-it';
import { SocialMedia } from './services/social-media/social-media';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'gallery', component: Gallery },
  { path: 'services', component: Services },
  { path: 'services/digital-marketing', component: DigitalMarketing },
  { path: 'contact', component: Contact },
  { path: 'software-development', component: SoftwareDevelopment },
  { path: 'branding-analytics', component: BrandingAnalytics },
  { path: 'advertising', component: AdvertisingPage },
  { path: 'general', component: GeneralIt },
  { path: 'social-media', component: SocialMedia },
  { path: 'login', component: Login },
];
