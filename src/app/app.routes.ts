import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BundlePageComponent} from "./store/pages/bundle-page/bundle-page.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'store/bundles', component: BundlePageComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
