import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { ReuseComponent } from './reuse/reuse.component';
import { ReduceComponent } from './reduce/reduce.component';
import { RecycleComponent } from './recycle/recycle.component';
import { SproutHomeComponent } from './sprout-home/sprout-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
    {
        path: 'reuse',
        component: ReuseComponent
    },
    {
        path: 'reduce',
        component: ReduceComponent
    },
    {
        path: 'recycle',
        component: RecycleComponent
    },
    {
        path: 'home',
        component: LandingComponent
    },
    {
        path: 'AboutUs',
        component: AboutUsComponent
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }