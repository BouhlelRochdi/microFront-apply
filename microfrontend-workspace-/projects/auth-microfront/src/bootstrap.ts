import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AuthMicroFrontModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(AuthMicroFrontModule)
  .catch(err => console.error(err));
