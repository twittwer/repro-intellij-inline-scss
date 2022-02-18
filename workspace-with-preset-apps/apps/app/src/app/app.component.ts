import { Component } from '@angular/core';

@Component({
  selector: 'apps-root',
  template: ` <apps-nx-welcome></apps-nx-welcome> `,
  styles: [
    `
      $background: lightgreen;

      :host {
        display: block;
        background: $background;
      }
    `,
  ],
})
export class AppComponent {
  title = 'app';
}
