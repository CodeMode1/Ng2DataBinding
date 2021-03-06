import { Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation : string = 'This is string interpolation';
  numberInterpolation : number = 2;

  onTest(){
    return true;
  }

  onClicked(value : string){
    alert(value);
  }
}
