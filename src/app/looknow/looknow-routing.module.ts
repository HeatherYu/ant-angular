import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LookoneComponent } from './lookone/lookone.component';
import { LookonengComponent } from './lookoneng/lookoneng.component';

const routes: Routes = [
  {
    path: '',
    component: LookoneComponent
  }, {
    path: 'ng',
    component: LookonengComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LooknowRoutingModule { }
