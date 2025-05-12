import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryDataService } from '@services/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    // since angular-in-memory-web-api is still a module-based library.
    // importProvidersFrom is the bridge that allows to use legacy NgModules (like InMemoryWebApiModule) in a standalone app.
    // https://stackoverflow.com/questions/76427328/anyone-try-using-inmemorywebapi-with-standalone-components?utm_source=chatgpt.com
    importProvidersFrom(
      InMemoryWebApiModule.forRoot(InMemoryDataService, {
        delay: 500,
      })
    ),
  ],
};
