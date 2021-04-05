import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./components/auth/auth-container/auth-container.module').then(
  //       (m) => m.AuthContainerPageModule
  //     ),
  // },
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'logged-out',
    loadChildren: () =>
      import('./components/logged-out/logged-out.module').then(
        (m) => m.LoggedOutPageModule
      ),
  },  {
    path: 'cart',
    loadChildren: () => import('./components/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./components/books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./components/search/search.module').then( m => m.SearchPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
