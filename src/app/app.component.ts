import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title : string = 'app works!';
  delete : boolean = false;
  test : string = 'Starting Value';
  boundValue : number = 1000;
}
