import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-two-way',
  template: `
    <input type="text" [(ngModel)]="person.name"/>
    <input type="text" [(ngModel)]="person.age"/>
    {{person.name}}
    {{person.age}}
  `,
  styles: []
})
export class TwoWayBindingComponent {
  person = {
    name: 'Max',
    age: 27
  };


}
