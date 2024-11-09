import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { PartiesComponent } from './modules/admin/parties/parties.component';
import { AddNewPartyComponent } from './modules/admin/parties/add-new-party/add-new-party.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent, canActivate: [authGuard] }, // Guard applied here
    {
        path: "", component: AdminLayoutComponent, children: [
            { path: "parties", component: PartiesComponent, canActivate: [authGuard] },
            { path: "add-new-party", component: AddNewPartyComponent, canActivate: [authGuard] },
            { path: "", redirectTo: "parties", pathMatch: "full" },
        ]
    },
    { path: "**", redirectTo: "login" }, // Redirect any other routes to login
]