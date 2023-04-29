import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { CreateAccountComponent } from './Components/create-account/create-account.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarSidebarComponent } from './Components/navbar-sidebar/navbar-sidebar.component';
import { CreateEmployesComponent } from './Components/create-employes/create-employes.component';
import { EmployesComponent } from './Components/employes/employes.component';
import { FicheEmployeComponent } from './Components/fiche-employe/fiche-employe.component';
import { HeureSupplementaireComponent } from './Components/heure-supplementaire/heure-supplementaire.component';
import { EditEmployeComponent } from './Components/edit-employe/edit-employe.component';
import { AuthGuard } from './auth.guard';
import { CreateHeureSuppAEffComponent } from './Components/create-heure-supp-aeff/create-heure-supp-aeff.component';
import { ValiderHeureSuppAeFFComponent } from './Components/valider-heure-supp-ae-ff/valider-heure-supp-ae-ff.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'create', component: CreateAccountComponent},
  {path:'home', component: HomeComponent},
  {path:'index', component: EmployesComponent, canActivate: [AuthGuard] },
  {path:'employe', component: CreateEmployesComponent,canActivate: [AuthGuard] },
  {path:'InfoEmp/:id', component: FicheEmployeComponent,canActivate: [AuthGuard] },
  {path:'heuresupp', component: HeureSupplementaireComponent,canActivate: [AuthGuard] },
  {path:'editEmp/:id', component: EditEmployeComponent,canActivate: [AuthGuard] },
  {path:'createHeureSupp', component: CreateHeureSuppAEffComponent,canActivate: [AuthGuard] },
  {path:'validerHeureSupp/:id', component: ValiderHeureSuppAeFFComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
