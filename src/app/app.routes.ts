import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LeftsidebarComponent } from './layout/leftsidebar/leftsidebar.component';
import { HomeComponent } from './super-admin/home/home.component';
import { AdminendComponent } from './super-admin/adminend/adminend.component';
import { CableoperatorsComponent } from './super-admin/cableoperators/cableoperators.component';
import { StaffadminComponent } from './super-admin/staffadmin/staffadmin.component';
import { CustomerComponent } from './super-admin/customer/customer.component';
import { PlanComponent } from './super-admin/plan/plan.component';
import { SubscriptionComponent } from './super-admin/subscription/subscription.component';
import { TransactionsComponent } from './super-admin/transactions/transactions.component';

export const routes: Routes = [

    // login
    {
        path:'',
        component:LoginComponent
    },

    // register
    {
        path:'register',
        component:RegisterComponent
    },

    // super admin dashboard
    {
        path:'superadmin/dashboard',
        component:HomeComponent
    },

    // super admin dashboard - admin
    {
        path:'superadmin/admin',
        component:AdminendComponent
    },

    // super admin dashboard - staff admin
    {
        path:'superadmin/staff/admin',
        component:StaffadminComponent
    },

    // super admin dashboard - cable operators
    {
        path:'superadmin/cable/operators',
        component:CableoperatorsComponent
    },

    // super admin dashboard - customers
    {
        path:'superadmin/customers',
        component:CustomerComponent
    },

    // super admin dashboard - Plans
    {
        path:'superadmin/plans',
        component:PlanComponent
    },

    // super admin dashboard - Subscription
    {
        path:'superadmin/subscription',
        component:SubscriptionComponent
    },

    // super admin dashboard - Transactions
    {
        path:'superadmin/transactions',
        component:TransactionsComponent
    },
  
];
