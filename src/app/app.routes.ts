import { Routes } from '@angular/router';
import { LandingComponent } from './pages/website/landing/landing.component';
import { AboutComponent } from './pages/website/about/about.component';
import { ProjectsComponent } from './pages/website/projects/projects.component';
import { BlogsComponent } from './pages/website/blogs/blogs.component';
import { GalleryComponent } from './pages/website/gallery/gallery.component';
import { ContactMeComponent } from './pages/website/contact-me/contact-me.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component:LandingComponent,
        children: [
            {
                path: 'about',
                component:AboutComponent
            },
            {
                path: 'projects',
                component:ProjectsComponent
            },
            {
                path: 'blogs',
                component:BlogsComponent
            },
            {
                path: 'gallery',
                component:GalleryComponent
            },
            {
                path: 'contact-me',
                component:ContactMeComponent
            },
        ]
    }
];
