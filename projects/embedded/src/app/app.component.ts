import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Embedded Ng App: {{title}}</h1>'
})
export class AppComponent {
  title = 'embedded';
}
