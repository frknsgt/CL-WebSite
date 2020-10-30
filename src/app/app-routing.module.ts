import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import {
  ClientLayoutComponent,
  AdminLayoutComponent,
} from './components/layouts';
import {
  HomepageComponent,
  DashboardComponent,
  LoginComponent,
  ComponentAddComponent,
  UserListComponent,
  ComponentMenuListComponent,
  UserAddComponent,
  BlogMenuListComponent,
  BlogListComponent,
  ComponentListComponent,
  ProjectListComponent,
  BlogAddComponent,
} from './pages';
import { AuthGuard } from './utils/guards';
import { Roles } from './models/roles';
import { AddBlogMenuComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [{ path: '', component: HomepageComponent }],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
          icon: 'fa fa-2x fa-home',
          authorize: [
            Roles.Root,
            Roles.Administrator,
            Roles.Developer,
            Roles.Editor,
          ],
        },
      },
      {
        path: 'blog/add',
        component: BlogAddComponent,
        data: {
          title: 'Add Blog',
          icon: 'fa fa-2x fa-address-book',
        },
      },
      {
        path: 'blog/edit/:BlogID',
        component: BlogAddComponent,
        data: {
          title: 'Edit Blog',
          icon: 'fa fa-2x fa-address-book',
        },
      },
      {
        path: 'users',
        component: UserListComponent,
        data: {
          title: 'User List',
          icon: 'fa fa-2x fa-address-book',
          authorize: [Roles.Root, Roles.Administrator],
        },
      },
      {
        path: 'user/add',
        component: UserAddComponent,
        data: {
          title: 'User Add',
          icon: 'fa fa-2x fa-home',
          authorize: [Roles.Root, Roles.Administrator],
        },
      },
      {
        path: 'user/profile',
        component: UserAddComponent,
        data: {
          title: 'User Add',
          icon: 'fa fa-2x fa-home',
        },
      },
      {
        path: 'user/edit/:UserID',
        component: UserAddComponent,
        data: {
          title: 'Edit User Information',
          icon: 'fa fa-2x fa-user-edit',
          authorize: [Roles.Root, Roles.Administrator],
        },
      },
      {
        path: 'component-menus',
        component: ComponentMenuListComponent,
        data: {
          title: 'Component Menu List',
          icon: 'fa fa-2x fa-address-book',
          authorize: [Roles.Root, Roles.Administrator],
        },
      },
      {
        path: 'components',
        component: ComponentListComponent,
        data: {
          title: 'Component List',
          icon: 'fa fa-2x fa-address-book',
          authorize: [Roles.Root, Roles.Administrator, Roles.Developer],
        },
      },
      {
        path: 'component/add',
        component: ComponentAddComponent,
        data: {
          title: 'Component List',
          icon: 'fa fa-2x fa-address-book',
          authorize: [Roles.Root, Roles.Administrator, Roles.Developer],
        },
      },
      {
        path: 'component/edit/:ComponentID',
        component: ComponentAddComponent,
        data: {
          title: 'Component List',
          icon: 'fa fa-2x fa-address-book',
          authorize: [Roles.Root, Roles.Administrator, Roles.Developer],
        },
      },
      {
        path: 'blog-menus',
        component: BlogMenuListComponent,
        data: {
          title: 'Blog Menu List',
          icon: 'fa fa-2x fa-address-book',
          authorize: [Roles.Root, Roles.Administrator],
        },
      },
      {
        path: 'blogs',
        component: BlogListComponent,
        data: {
          title: 'Blog List',
          icon: 'fa fa-2x fa-address-book',
          authorize: [Roles.Root, Roles.Administrator, Roles.Editor],
        },
      },
      {
        path: 'projects',
        component: ProjectListComponent,
        data: {
          title: 'Project List',
          icon: 'fa fa-2x fa-address-book',
          authorize: [Roles.Root, Roles.Administrator,Roles.Developer,Roles.Editor,Roles.User],
        },
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'ismet w' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [];
