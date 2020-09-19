import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmbedComponent} from './embed.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmbedComponent],
  exports: [EmbedComponent],
  entryComponents: [EmbedComponent]
})
export class NgembedModule {
}
