import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { PageTitleStrategy } from './page-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      // override title strategy, use my custom title strat
      provide: TitleStrategy,
      useClass: PageTitleStrategy
    }
  ]
};
