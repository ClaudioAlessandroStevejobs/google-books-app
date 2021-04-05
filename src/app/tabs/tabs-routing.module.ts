import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import(
            '../components/auth/auth-container/auth-container.module'
          ).then((m) => m.AuthContainerPageModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../components/account/account.module').then(
            (m) => m.AccountPageModule
          ),
      },
      {
        path: 'books',
        loadChildren: () =>
          import('../components/books/books.module').then(
            (m) => m.BooksPageModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../components/cart/cart.module').then(
            (m) => m.CartPageModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../components/search/search.module').then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: 'logged-out',
        loadChildren: () =>
          import('../components/logged-out/logged-out.module').then(
            (m) => m.LoggedOutPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
