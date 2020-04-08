import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client/client.component';
import {SubscriptionComponent} from './subscription/subscription.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: 'clientes',
    component: ClientComponent
  },
  {
    path: 'suscripciones',
    component: SubscriptionComponent
  },
  {
    path: 'inicio',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
