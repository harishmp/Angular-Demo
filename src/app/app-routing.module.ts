import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './@components/home/home.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', loadChildren: () => import('../app/@modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'wishlist', loadChildren: () => import('../app/@modules/wishlist/wishlist.module').then(m => m.WishlistModule)},
  {path: 'pokemon-detail-page/:id', loadChildren: () => import('../app/@modules/detail-page/detail-page.module').then(m => m.DetailPageModule)},
  {path: 'change-detection', loadChildren: () => import('../app/@modules/change-detection/change-detection.module').then(m => m.ChangeDetectionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
