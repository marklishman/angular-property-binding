import { Component } from '@angular/core';

@Component({
  selector: 'app-syntax',
  template: `
    <h1>Syntax</h1>

    <p #p1 title="'Hello ' + name">{{p1.title}}</p>
    <p #p2 title="{{'Hello ' + name}}">{{p2.title}}</p>
    <p #p3 [title]="'Hello ' + name">{{p3.title}}</p>
    <p #p4 bind-title="'Hello ' + name">{{p4.title}}</p>

    <p textContent="You won't see this">This won't change</p>
    <p textContent="{{'Hello ' + name}}">You won't see this</p>
    <p [textContent]="'Hello ' + name">You won't see this</p>
    <p bind-textContent="'Hello ' + name">You won't see this</p>

    <button (click)="name='Brave New World'">Update</button>`
})
export class SyntaxComponent {
  name = 'World';
}
