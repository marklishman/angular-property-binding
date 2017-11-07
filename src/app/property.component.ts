import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  template: `
    <h1 [textContent]="'Name: ' + person.name"></h1>

    <button (click)="person = male" [disabled]="person.sex=='m'">Male</button>
    <button (click)="person = female" [disabled]="person.sex=='f'">Female</button>

    <p><img [src]="person.photo" [alt]="person.name" [title]="person.name"></p>
    <p [hidden]="!person.rating">
      Rating: <span [innerHTML]="'&#10032;'.repeat(person.rating)"></span>
    </p>`
})
export class PropertyComponent {
  female = {
    name: 'Turanga Leela',
    sex: 'f',
    rating: 4,
    photo: 'assets/images/leela.jpg?raw=true'
  };
  male = {
    name: 'Philip J. Fry',
    sex: 'm',
    photo: 'assets/images/fry.jpg?raw=true'
  };
  person = this.female;
}
