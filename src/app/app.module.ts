import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatabindingComponent, PropertyBindingComponent, 
        EventBindingComponent, TwoWayBindingComponent} from './databinding'

import { LifecycleComponent } from './lifecycle.component'

@NgModule({
    declarations: [AppComponent, DatabindingComponent, 
                    PropertyBindingComponent, EventBindingComponent, 
                    TwoWayBindingComponent, LifecycleComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}