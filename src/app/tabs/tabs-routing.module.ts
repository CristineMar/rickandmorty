import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('../tab/userlist/userlist.module').then((m) => m.UserlistPageModule),
      },
      {
        path: 'location',
        loadChildren: () =>
          import('../tab/locationlist/locationlist.module').then((m) => m.LocationlistPageModule),
      },
      {
        path: 'episode',
        loadChildren: () =>
          import('../tab/episodelist/episodelist.module').then((m) => m.EpisodelistPageModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
