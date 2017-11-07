import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-property *ngIf="showSection('property')"></app-property>
    <app-expression *ngIf="showSection('expression')"></app-expression>
    <app-syntax *ngIf="showSection('syntax')"></app-syntax>
    <app-attribute *ngIf="showSection('attribute')"></app-attribute>`
})
export class AppComponent {

  showSection(name: string): boolean {
    if (!window.location.search) {
      return true;
    }
    const PARAM = window.location.search.substr(1);
    return PARAM === name;
  }
}
