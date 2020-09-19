import {Component, ElementRef, Input, OnInit} from '@angular/core';

const styles = ['styles.css'];
const scripts = ['main.js', 'polyfill-webcomp.js'];


@Component({
  selector: 'xpr-embed',
  template: '<ng-content></ng-content>'
})
export class EmbedComponent implements OnInit {
  @Input() src = '';
  @Input() tag = '';

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    const el = this.el.nativeElement;
    const src = this.src;
    const tag = this.tag;

    if (src === '' || tag === '') {
      return;
    }

    // let's create a shadow 👻
    const shadow = el.attachShadow({mode: 'open'});

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
  }
}
