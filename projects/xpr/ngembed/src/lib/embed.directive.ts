import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {NgembedConf} from './ngembed-conf';
import {DOCUMENT} from '@angular/common';
import {render} from './render';

@Directive({
  selector: '[ngEmbed]'
})
export class EmbedDirective implements OnInit {
  conf: NgembedConf | unknown;

  @Input() set ngEmbed(conf: NgembedConf | string | unknown) {
    if (typeof conf === 'string') {
      this.conf = NgembedConf.from(conf);
    } else if (conf instanceof NgembedConf) {
      this.conf = conf;
    }
  }

  constructor(private el: ElementRef,
              @Inject(DOCUMENT) private doc: Document) {
  }

  ngOnInit(): void {
    if (this.conf instanceof NgembedConf) {
      render(this.doc, this.el.nativeElement, this.conf);
    } else {
      throw new Error('NgEmbedError: unknown configuration');
    }
  }

}
