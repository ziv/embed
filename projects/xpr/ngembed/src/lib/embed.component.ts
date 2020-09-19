import {Component} from '@angular/core';
import {Embed} from './embed';

@Component({
  selector: 'ng-embed',
  template: '<ng-content></ng-content>',
})
export class EmbedComponent extends Embed {
}
