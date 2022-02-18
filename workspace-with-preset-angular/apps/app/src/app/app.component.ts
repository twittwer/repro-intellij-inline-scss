import { Component } from '@angular/core';

@Component({
  selector: 'angular-root',
  template: `<angular-nx-welcome></angular-nx-welcome>`,
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
