import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import { LocaleService } from './services/locale.service';

//!--- Para la configuración de la hora local.
import localEsMX from '@angular/common/locales/es-MX';
import localFrBE from '@angular/common/locales/fr-BE';
registerLocaleData(localEsMX, 'es-MX');
registerLocaleData(localFrBE, 'fr-BE');
//!----

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      //!--- Para la configuración de la hora local.
      provide: LOCALE_ID,
      // useValue: 'es-MX',
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale, //? Forma de cambiar el idioma dinámicamente.
      //!----
    },
  ],
};
