import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {NgembedConf, NgembedErrorType} from './ngembed-conf';

@Component({
  selector: 'ng-embed',
  template: '<ng-content></ng-content>',
})
export class EmbedComponent implements OnInit {
  embed: NgembedConf | unknown;

  @Input() set conf(conf: NgembedConf | string | unknown) {
    if (typeof conf === 'string') {
      this.embed = NgembedConf.from(conf);
    } else if (conf instanceof NgembedConf) {
      this.embed = conf;
    }
  }

  constructor(private el: ElementRef) {
    console.log('ec:ctr');
    console.log('ec:ctr');
  }

  ngOnInit(): void {
    console.log('ec:init');
    console.log(this.conf, this.conf instanceof NgembedConf);
    if (this.conf instanceof NgembedConf) {
      console.log('to render and beyond');
      this.render(this.el.nativeElement, this.embed as NgembedConf);
    } else {
      throw new Error('NgEmbedError: unknown configuration');
    }
  }

  render(el: HTMLElement, conf: NgembedConf): void {
    const {styles, scripts, mode, tag, src} = conf;

    try {

      // let's create a shadow 👻
      const shadow = el.attachShadow({mode});

      // attach css
      styles.forEach(style => {
        const e = document.createElement('link');
        e.rel = 'stylesheet';
        e.href = `${src}/${style}`;
        shadow.appendChild(e);
      });

      // attach scripts
      scripts.forEach(script => {
        const e = document.createElement('script');
        e.src = `${src}/${script}`;
        e.defer = true;
        shadow.appendChild(e);
      });

      // and finally, a custom element
      shadow.appendChild(document.createElement(tag));

    } catch (e) {
      // how should I handle your errors, Sir?
      switch (conf.errorType) {
        case NgembedErrorType.Throw:
          throw e;
        case NgembedErrorType.Log:
          console.error(e);
          break;
        case NgembedErrorType.Silent:
          // ignore
          break;
      }
    }
  }
}
