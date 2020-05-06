import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './Pages/client/client.component';
import {SubscriptionComponent} from './Pages/subscription/subscription.component';
import {HomeComponent} from './Pages/home/home.component';


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
