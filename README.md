# @xpr/embed - Angular Embed

An easy way to embed Angular application in another Angular application.

## Install
```
npm install @xpr/embed
```

## Embedded Application
Preparing embedded Angular app steps:
* Make sure your root components selector (usually `AppComponent`) is not `app-root` (to avoid collision with hosting app).
* Add `@angular/elements` to your app
  ```
  ng add @angular/elements
  ```
* Add `ngx-build-plus` builder and generate web-components polyfills
  ```
  ng add ngx-build-plus
  ng g ngx-build-plus:wc-polyfill
  ```
* Change your `AppModule` to define a custom element from your root component
  ```typescript
  import {createCustomElement} from '@angular/elements';
  ...
  export class AppModule implements DoBootstrap {
     constructor(private injector: Injector) {
      }
  
      ngDoBootstrap(appRef: ApplicationRef): void {
        const el = createCustomElement(AppComponent, {injector: this.injector});
        customElements.define('my-app', el);
      }
  }
  ```
* Build yor app using
  ```
  ng build  --prod --output-hashing=none --single-bundle
  ```
  
## Host Application  
* Copy embedded generated files `main.js`, `polyfill-webcomp.js` and `styles.css` into your `src/assets` directory of your host app.
* Install `@xpr/embed`
  ```
  npm i @xpr/embed
  ```
* Import `XprEmbed` module to your `AppModule`
* Add `xpr-embed` tag to your template:
  ```html
  <xpr-embed tag="my-app"></xpr-embed>
  ```
