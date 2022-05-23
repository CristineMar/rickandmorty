import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'userlist',
    loadChildren: () => import('./tab/userlist/userlist.module').then( m => m.UserlistPageModule)
  },
  {
    path: 'locationlist',
    loadChildren: () => import('./tab/locationlist/locationlist.module').then( m => m.LocationlistPageModule)
  },
  {
    path: 'episodelist',
    loadChildren: () => import('./tab/episodelist/episodelist.module').then( m => m.EpisodelistPageModule)
  },
  {
    path: 'profile/:info/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
