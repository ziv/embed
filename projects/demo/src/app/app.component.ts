import { Component } from '@angular/core';
import {NgembedConf} from '../../../../dist/xpr/ngembed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  conf: NgembedConf = new NgembedConf('demo-app');
}
