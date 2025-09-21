import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { ServiceWorkerModule, provideServiceWorker } from '@angular/service-worker';

const isProduction = true; // set false if testing locally

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: isProduction,
        registrationStrategy: 'registerWhenStable:30000'
      })
    ), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ]
})
.catch((err) => console.error(err));
