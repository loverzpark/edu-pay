import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';
import { ParentsComponent } from './parents/parents.component';
import { BillsComponent } from './bills/bills.component';
import { ViewbillsComponent } from './viewbills/viewbills.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' }  },
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'parents', component: ParentsComponent, data: { breadcrumb: 'Parents' } },
            { path: 'bills', component: BillsComponent, data: { breadcrumb: 'Bills' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'viewbills', component: ViewbillsComponent, data: {breadcrumb: 'View Bills'}},

       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
