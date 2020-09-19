import {BrowserModule} from '@angular/platform-browser';
import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    const el = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('demo-app', el);
  }
}
