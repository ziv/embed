import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngd-embed',
  template: '<ng-content></ng-content>'
})
export class NgembedComponent implements OnInit {
  @Input() src = '';
  @Input() scripts: string[] = ['runtime', 'polyfills', 'main'];
  @Input() styles: string[] = ['styles'];
  @Input() tag = '';

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (!this.src || !this.tag) {
      // nothing to do
      return;
    }
    this.render();
  }

  render(): void {
    // let's create shadow root
    const shadow = this.el.nativeElement.attachShadow({mode: 'open'});
    // ...and our custom element
    const custom = document.createElement(this.tag);
    // ..and then connect
    shadow.appendChild(custom);

    // attach all scripts...
    this.scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = `${this.src}/${src}`;
      script.defer = true;
      shadow.appendChild(script);
    });

    // ...and styles
    this.styles.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      shadow.appendChild(link);
    });
  }
}
