import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import * as fromLayout from './layout';

const routes: Routes = [
  { path: 'wellcome', component: fromLayout.WellcomePageComponent },
  {
    path: 'login',
    loadChildren:  './auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: fromLayout.DashboardComponent,
    children: [
      {
        path: 'home',
        component: fromLayout.HomeComponent
      },
      {
        path: 'projects',
        component: fromLayout.ProjectComponent,
      },
      {
        path: 'projects/addproject',
        component: fromLayout.AddprojectComponent,
      },
      {
        path: 'publish',
        component: fromLayout.PublishnowComponent
      },
      {
        path: 'contentplan',
        component: fromLayout.ContentPlanComponent,
        children: [
          {
            path: '',
            component: fromLayout.CalendarComponent
          },
          {
            path: 'analytics',
            component: fromLayout.AnalyticsComponent
          },
          {
            path: 'status',
            component: fromLayout.StatusComponent
          }
        ]
      },
    ]
  },
  { path: '**', component: fromLayout.PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
