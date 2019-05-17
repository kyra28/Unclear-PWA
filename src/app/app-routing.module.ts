import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/tabs/home/home.component';
import {TeamsComponent} from './components/tabs/teams/teams.component';
import {EventsComponent} from './components/tabs/events/events.component';
import {PartnersComponent} from './components/tabs/partners/partners.component';
import {NewsComponent} from './components/tabs/news/news.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'events', component: EventsComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'news/:id', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
