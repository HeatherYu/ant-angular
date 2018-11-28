import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LooknowRoutingModule } from './looknow-routing.module';
import { LookoneComponent } from './lookone/lookone.component';
import { LookonengComponent } from './lookoneng/lookoneng.component';

@NgModule({
  imports: [
    CommonModule,
    LooknowRoutingModule
  ],
  declarations: [LookoneComponent, LookonengComponent]
})
export class LooknowModule { }
