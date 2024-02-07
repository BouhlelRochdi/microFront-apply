import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UserMicroFrontModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(UserMicroFrontModule)
  .catch(err => console.error(err));
