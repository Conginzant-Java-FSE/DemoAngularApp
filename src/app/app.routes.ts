import { Routes } from '@angular/router';
import { Features } from './features/features';
import { Display } from './display/display';
import { App } from './app';
import { Products } from './products/products';

export const routes: Routes = [
    {path:'features', component: Features},
    {path:'features/:id', component: Features},
    {path:'about', component: Display},
    {path:'products', component: Products}
];
