import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';

import { ClientinfoComponent } from './components/clientinfo/clientinfo.component';
import { SiteinfoComponent } from './components/siteinfo/siteinfo.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { CustomiseComponent } from './components/customise/customise.component';
import { ResultComponent } from './components/result/result.component';
import { WizComponent } from './components/wiz/wiz.component';

import { WorkflowGuard } from './services/workflow/workflow-guard.service';
import { WorkflowService } from './services/workflow/workflow.service';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  
  /* Client Display Routes */
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/:serviceUuid', component: ClientDetailComponent },
  
  /* Client Onboarding Routes */
  { path: 'clientOnboard/clientinfo', component: ClientinfoComponent },
  { path: 'clientOnboard/siteinfo', component: SiteinfoComponent },
  { path: 'clientOnboard/agreement', component: AgreementComponent },
  { path: 'clientOnboard/customise', component: CustomiseComponent },
  { path: 'clientOnboard/result', component: ResultComponent },
  { path: 'clientOnboard', component: WizComponent },
  
  /* Default Route*/
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule { }
