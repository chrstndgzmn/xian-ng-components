import { Routes } from '@angular/router';
import { TileSelectionComponent } from './pages/xian/components/tile-selection/tile-selection.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ErrorHandler, inject } from '@angular/core';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { XianComponent } from './pages/xian/xian.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ThemeCheckboxComponent } from './pages/xian/components/theme-checkbox/theme-checkbox.component';

export const routes: Routes = [

    {
        path: 'home',
        title: 'Home',
        component: HomePageComponent
    },
    {
        title: 'Components',
        path: 'components',
        component: XianComponent,
        children: [
            {
                title:'Tile Select',
                path: 'tile-selection',
                component: TileSelectionComponent
            },
            {
                title:'Theme Checkbox',
                path: 'theme-checkbox',
                component: ThemeCheckboxComponent
            }
        ]
    },
    {
        title: 'User List',
        path: 'users', //  list of users
        component: UsersPageComponent,
        children:[
            
        ]
    },
    {
        title: 'User Profile',
        path: 'user/:userId', //  userprofile
        component: UserPageComponent,
    },

    {
        path: 'old-user-page', // complicated redirect example
        redirectTo: (redirectData) => {
            const { params, data, fragment, outlet, queryParams, routeConfig, title, url } = redirectData;
            const errorHandler = inject(ErrorHandler)

            const userIdParam = queryParams['userId'];
            if (userIdParam !== undefined) {
                return `/user/${userIdParam}`;
            } else {
                errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
                return `**`;
            }
        }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**', // Wildcard route for 404
        component: PageNotFoundComponent
    }
];
