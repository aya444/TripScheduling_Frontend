import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsListComponent } from './components/trips-list/trips-list.component';
import { AddTripComponent } from './components/add-trip/add-trip.component';
import { UpdateTripComponent } from './components/update-trip/update-trip.component';
import { StationsListComponent } from './components/stations-list/stations-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'trips', component: TripsListComponent },
  { path: 'add', component: AddTripComponent },
  { path: 'update/:id', component: UpdateTripComponent },
  { path: 'station', component: StationsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
