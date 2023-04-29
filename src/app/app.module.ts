import { COMPILER_OPTIONS, CompilerFactory, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { CreateAccountComponent } from './Components/create-account/create-account.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarSidebarComponent } from './Components/navbar-sidebar/navbar-sidebar.component';
import { EmployesComponent } from './Components/employes/employes.component';
import { CreateEmployesComponent } from './Components/create-employes/create-employes.component';
import { FormsModule } from '@angular/forms';
import { FicheEmployeComponent } from './Components/fiche-employe/fiche-employe.component';
import { SortByNamePipe } from './pipes/sort-by-name.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeureSupplementaireComponent } from './Components/heure-supplementaire/heure-supplementaire.component';

import { PopupComponent } from './Components/popup/popup.component';
import { EditEmployeComponent } from './Components/edit-employe/edit-employe.component';
import { UpdateEmployeComponent } from './Components/update-employe/update-employe.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateHeureSuppAEffComponent } from './Components/create-heure-supp-aeff/create-heure-supp-aeff.component';
import { AuthGuard } from './auth.guard';
import { ValiderHeureSuppAeFFComponent } from './Components/valider-heure-supp-ae-ff/valider-heure-supp-ae-ff.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    NavbarSidebarComponent,
    EmployesComponent,
    CreateEmployesComponent,
    FicheEmployeComponent,
    SortByNamePipe,
    HeureSupplementaireComponent,
    PopupComponent,
    EditEmployeComponent,
    UpdateEmployeComponent,
    CreateHeureSuppAEffComponent,
    ValiderHeureSuppAeFFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    HttpClientModule,
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule  ],

  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
