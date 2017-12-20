import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/:id', component: ClientDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
