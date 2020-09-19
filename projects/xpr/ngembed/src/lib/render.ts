import {NgembedConf, NgembedErrorType} from './ngembed-conf';

export function render(doc: Document, el: HTMLElement, conf: NgembedConf): void {
  const {styles, scripts, mode, tag, src} = conf;

  try {

    // let's create a shadow 👻
    const shadow = el.attachShadow({mode});

    // attach css
    styles.forEach(style => {
      const e = doc.createElement('link');
      e.rel = 'stylesheet';
      e.href = `${src}/${style}`;
      shadow.appendChild(e);
    });

    // attach scripts
    scripts.forEach(script => {
      const e = doc.createElement('script');
      e.src = `${src}/${script}`;
      e.defer = true;
      shadow.appendChild(e);
    });

    // and finally, a custom element
    shadow.appendChild(doc.createElement(tag));

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
