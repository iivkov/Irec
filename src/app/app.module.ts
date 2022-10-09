import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YardsListComponent } from './components/yards-list/yards-list.component';
import { YardDetailsComponent } from './components/yard-details/yard-details.component';
import { AddYardComponent } from './components/add-yard/add-yard.component';
import { UpdateYardComponent } from './components/update-yard/update-yard.component';
import { WasteItemsComponent } from './components/waste-items/waste-items.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { RegisterComponent } from './components/register/register.component';
import { RecyclerPanelComponent } from './components/recycler-panel/recycler-panel.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ConsumerPanelComponent } from './components/consumer-panel/consumer-panel.component';
import { httpInterceptorProviders } from './helpers/http.interceptor';
import { RecyclingsListComponent } from './components/recyclings-list/recyclings-list.component';
import { AddRecyclingComponent } from './components/add-recycling/add-recycling.component';
import { UpdateRecyclingComponent } from './components/update-recycling/update-recycling.component';
import { RecyclingDetailsComponent } from './components/recycling-details/recycling-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRecyclingsComponent } from './components/user-recyclings/user-recyclings.component';

@NgModule({
  declarations: [
    AppComponent,
    YardsListComponent,
    YardDetailsComponent,
    AddYardComponent,
    UpdateYardComponent,
    WasteItemsComponent,
    SearchFilterPipe,
    RegisterComponent,
    RecyclerPanelComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    ConsumerPanelComponent,
    RecyclingsListComponent,
    AddRecyclingComponent,
    UpdateRecyclingComponent,
    RecyclingDetailsComponent,
    UsersListComponent,
    UserDetailsComponent,
    UserRecyclingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
