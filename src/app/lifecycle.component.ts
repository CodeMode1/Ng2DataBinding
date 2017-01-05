import { 
  Component, 
  OnInit,
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy,
  Input,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-lifecycle',
  template: `
  <ng-content></ng-content>
  <hr>
  <p #boundParagraph>{{bindable}}</p>
  <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() bindable = 1000;
  @ViewChild('boundParagraph') boundHere : HTMLElement;

  @ContentChild('boundContent') boundContent : HTMLElement;

  constructor() { }

  ngOnChanges(){
    this.log('ngOnChanges');
  }
  ngDoCheck(){
    this.log('ngDoCheck');
  }
  ngOnInit() {
    this.log('ngOnInit');
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit');
    console.log(this.boundHere);
    console.log(this.boundContent);
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook : string){
    console.log(hook);
  }

}
