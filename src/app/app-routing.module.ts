import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './components/search.component';
import {StatusComponent} from './components/status.component';
import {HomeComponent} from './components/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'status', component: StatusComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
