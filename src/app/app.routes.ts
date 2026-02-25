import { Routes } from '@angular/router';
import { Features } from './features/features';
import { Display } from './display/display';
import { App } from './app';
import { Products } from './products/products';
import { Formcomponent } from './components/formcomponent/formcomponent';
import { ReactiveFormComponent } from './components/reactive-form-component/reactive-form-component';

export const routes: Routes = [
    {path:'features', component: Features},
    {path:'features/:id', component: Features},
    {path:'about', component: Display},
    {path:'products', component: Products},
    {path:"register",component:Formcomponent},
    {path:"login", component: ReactiveFormComponent}
];
