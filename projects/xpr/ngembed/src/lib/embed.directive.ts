import {Directive} from '@angular/core';
import {Embed} from './embed';

@Directive({selector: '[ngEmbed]'})
export class EmbedDirective extends Embed {
}
