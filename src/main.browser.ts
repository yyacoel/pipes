import {bootstrap} from '@angular/platform-browser-dynamic';
import {Examples} from './example/example';

// enableProdMode()

bootstrap(Examples)
.catch(err => console.error(err));
