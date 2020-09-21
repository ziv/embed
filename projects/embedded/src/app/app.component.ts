import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'demo-app',
  styles: [`
    div {
      background-color: #6c86be;
      padding: 1em;
      border: 1px dotted #ff0000;
    }
  `],
  template: '<div><h1>Embedded Ng App: {{title}}</h1></div>',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = '!embedded!';
}
