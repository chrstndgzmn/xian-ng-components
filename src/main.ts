import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import 'zone.js' 
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(error => console.error(error)) 