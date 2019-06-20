import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';

import * as fromLayout from './layout';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'wellcome',
    component: fromLayout.WellcomePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: fromLayout.DashboardComponent,
    canActivate: [AuthGuard],
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
