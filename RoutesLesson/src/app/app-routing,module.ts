import {NgModel} from '@angular/forms';
import {NgModule} from '@angular/core';
import {UsersComponent} from './users/users.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {UserComponent} from './users/user/user.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {HomeComponent} from './home/home.component';
import {AuthGaurd} from './auth-gaurd.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ServerResolver} from './servers/server/server-resolver.service';

const appRoutes: Routes  = [
  { path: '' , component: HomeComponent},
  { path: 'servers' , canActivateChild: [AuthGaurd], component: ServersComponent, children: [
      { path: ':id' , component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit' , component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
    ]},
  { path: 'users' , component: UsersComponent, children: [
      { path: ':id/:name' , component: UserComponent},
    ]},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
