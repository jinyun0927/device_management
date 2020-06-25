import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MypremierComponent } from './mypremier/mypremier.component';
import { AppareilComponent } from './appareil/appareil.component';

import {AppareilService} from './services/appareil.service';
import {AuthService} from './services/auth.service';

import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';

import {RouterModule, Routes} from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { reject } from 'q';
import { AuthGuard } from './services/auth.guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';

const appaRoutes: Routes = [
  { path: 'appareil', canActivate: [AuthGuard], component: AppareilViewComponent},
  { path: 'appareil/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  { path: 'editAppareil', canActivate: [AuthGuard], component: EditAppareilComponent},
  { path: 'users', component: UserListComponent},
  { path: 'new-user', component: NewUserComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', component: AppareilViewComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: '/not-found'}
];
@NgModule({
  declarations: [
    AppComponent,
    MypremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appaRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
