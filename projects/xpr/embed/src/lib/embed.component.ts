import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'xpr-embed',
  template: '<ng-content></ng-content>'
})
export class EmbedComponent implements OnInit {
  @Input() src = '/assets';
  @Input() tag = '';
  @Input() styles = ['styles.css'];
  @Input() scripts = ['main.js', 'polyfill-webcomp.js'];

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    const [el, src, tag, styles, scripts] = [
      this.el.nativeElement,
      this.src,
      this.tag,
      this.styles,
      this.scripts
    ];

    // no source, no tag nad no scripts?
    if (src === '' || tag === '' || scripts.length < 1) {
      // nothing to do
      return;
    }

    // let's create a shadow 👻
    const shadow = el.attachShadow({mode: 'open'});

    // attach css to 👻
    styles.forEach(style => {
      const e = document.createElement('link');
      e.rel = 'stylesheet';
      e.href = `${src}/${style}`;
      shadow.appendChild(e);
    });

    // attach scripts to 👻
    scripts.forEach(script => {
      const e = document.createElement('script');
      e.src = `${src}/${script}`;
      e.defer = true;
      shadow.appendChild(e);
    });

    // and finally, a custom element created in 👻
    shadow.appendChild(document.createElement(tag));
  }
}
