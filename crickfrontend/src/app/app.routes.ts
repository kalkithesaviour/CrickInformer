import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointsTableComponent } from './pages/points-table/points-table.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    title: "Home | CrickInformer"
  },
  {
    path: "history",
    component: HistoryComponent,
    title: "Match History | CrickInformer"
  },
  {
    path: "live",
    component: LiveComponent,
    title: "Live Matches | CrickInformer"
  },
  {
    path: "points-table",
    component: PointsTableComponent,
    title: "Points Table | CrickInformer"
  }
];
