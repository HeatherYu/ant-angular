import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './pages/setup/setup.component';
import { ObservableComponent } from './test/observable/observable.component';
import { MainRoutingModule } from './pages/main/main-routing.module';
const routes: Routes = [
  {
    path: 'looknow', loadChildren: './looknow/looknow.module#LooknowModule'
  }, {
    path: 'order', loadChildren: './orders/orders.module#OrdersModule'
  }, {
    path: 'hero', loadChildren: './pages/heroes/hero/hero.module#HeroModule'
  }, {
    path: 'setup', component: SetupComponent
  }, {
    path: '', redirectTo: 'setup', pathMatch: 'full'
  }, {
    path: 'main', redirectTo: '/main', pathMatch: 'full'
  }, {
    path: 'obsv', component: ObservableComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    MainRoutingModule
  ]
})
export class AppRoutingModule { }
