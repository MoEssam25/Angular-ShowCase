import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProjectListingComponent } from './Pages/project-listing/project-listing.component';
import { ProjectDetailsComponent } from './Pages/project-details/project-details.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'projects/:category', 
    component: ProjectListingComponent 
  },
  { 
    path: 'project/:id', 
    component: ProjectDetailsComponent
  },
  { 
    path: 'admin', 
    component: AdminDashboardComponent // Now points to actual admin dashboard
  },
  { path: '**', redirectTo: '' }
];