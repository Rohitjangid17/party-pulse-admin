import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { PartiesComponent } from './modules/admin/parties/parties.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent, canActivate: [authGuard] }, // Guard applied here
    {
        path: "", component: AdminLayoutComponent, children: [
            { path: "dashboard", component: DashboardComponent, canActivate: [authGuard] },
            { path: "parties", component: PartiesComponent, canActivate: [authGuard] },
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
        ]
    },
    { path: "**", redirectTo: "login" }, // Redirect any other routes to login
]