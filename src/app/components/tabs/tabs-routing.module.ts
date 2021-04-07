import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/utilities/login.guard';
import { BookDetailsPage } from '../book-details/book-details.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('../auth/auth-container/auth-container.module').then(
            (m) => m.AuthContainerPageModule
          ),
      },
      {
        path: 'books/details/:id',
        component: BookDetailsPage,
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'books',
        loadChildren: () =>
          import('../books/books.module').then((m) => m.BooksPageModule),
        canActivate: [LoginGuard],
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then((m) => m.AccountPageModule),
        canActivate: [LoginGuard],
      },

      {
        path: 'cart',
        loadChildren: () =>
          import('../cart/cart.module').then((m) => m.CartPageModule),
        canActivate: [LoginGuard],
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../search/search.module').then((m) => m.SearchPageModule),
      },
      {
        path: 'logged-out',
        loadChildren: () =>
          import('../logged-out/logged-out.module').then(
            (m) => m.LoggedOutPageModule
          ),
      },

      {
        path: 'insights',
        loadChildren: () =>
          import('../insights/insights.module').then((m) => m.InsightsModule),
        canActivate: [LoginGuard],
      },
      {
        path: 'new-book',
        loadChildren: () =>
          import('../book-form/book-form.module').then(
            (m) => m.BookFormPageModule
          ),
        canActivate: [LoginGuard],
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
