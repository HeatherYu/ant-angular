import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LeftControlComponent } from './left-control/left-control.component';

// import {MainRoutingModule} from './main-routing.module';
import { SharedModule } from '../../common/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MainComponent, LeftControlComponent]
})
export class MainModule { }
