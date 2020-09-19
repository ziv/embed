import {NgModule} from '@angular/core';
import {EmbedComponent} from './embed.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [EmbedComponent],
  entryComponents: [EmbedComponent],
  exports: [EmbedComponent]
})
export class EmbedModule {
}
