import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YardsListComponent } from './components/yards-list/yards-list.component';
import { YardDetailsComponent } from './components/yard-details/yard-details.component';
import { AddYardComponent } from './components/add-yard/add-yard.component';
import { UpdateYardComponent } from './components/update-yard/update-yard.component';
import { WasteItemsComponent } from './components/waste-items/waste-items.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ConsumerPanelComponent } from './components/consumer-panel/consumer-panel.component';
import { RecyclerPanelComponent } from './components/recycler-panel/recycler-panel.component';
import { RecyclingsListComponent } from './components/recyclings-list/recyclings-list.component';
import { AddRecyclingComponent } from './components/add-recycling/add-recycling.component';
import { UpdateRecyclingComponent } from './components/update-recycling/update-recycling.component';
import { RecyclingDetailsComponent } from './components/recycling-details/recycling-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRecyclingsComponent } from './components/user-recyclings/user-recyclings.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'wasteItems', component: WasteItemsComponent },
  { path: 'yards', component: YardsListComponent },
  { path: 'updateYard/:id', component: UpdateYardComponent },
  { path: 'yardDetails/:id', component: YardDetailsComponent },
  { path: 'addYard', component: AddYardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'recyclings', component: RecyclingsListComponent },
  { path: 'addRecycling', component: AddRecyclingComponent },
  { path: 'updateRecycling/:id', component: UpdateRecyclingComponent },
  { path: 'recyclingDetails/:id', component: RecyclingDetailsComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'userDetails/:id', component: UserDetailsComponent },
  { path: 'userRecyclings', component: UserRecyclingsComponent },
  { path: 'consumer', component: ConsumerPanelComponent },
  { path: 'recycler', component: RecyclerPanelComponent },
  // { path: 'user-recyclings', component: ConsumerPanelComponent },
  // { path: 'yards', component: YardsListComponent },
  // { path: 'recyclings', component: RecyclerPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
