import { EmbedDirective } from './embed.directive';
import {ElementRef} from '@angular/core';

describe('EmbedDirective', () => {
  it('should create an instance', () => {
    const directive = new EmbedDirective(
      new ElementRef(document.querySelector('body')),
      document);
    expect(directive).toBeTruthy();
  });
});
