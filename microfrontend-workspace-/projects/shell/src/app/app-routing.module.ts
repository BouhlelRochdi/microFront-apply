import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'authMicrofront',
        exposedModule: './AuthMicrofront'
    })
    .then(m => m.AuthModule)
  },
  {
    path: 'user',
    loadChildren: () => loadRemoteModule({
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        remoteName: 'userMicrofront',
        exposedModule: './userMicroFront'
    })
    .then(m => m.AuthModule)
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('../../../auth-microfront/src/app/app.module').then(m => m.AuthMicroFrontModule)
  // },
  // {
  //   path: 'user',
  //   loadChildren: () => import('../../../user-microfront/src/app/app.module').then(m => m.UserMicroFrontModule)
  // },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
