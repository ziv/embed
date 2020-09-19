import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { EmbedDirective } from './embed.directive';
import { EmbedComponent } from './embed/embed.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmbedDirective, EmbedComponent],
  exports: [EmbedDirective]
})
export class NgembedModule {
}
