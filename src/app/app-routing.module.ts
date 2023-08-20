import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ListbookComponent } from './listbook/listbook.component';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { DeatilsbookComponent } from './deatilsbook/deatilsbook.component';
import { CommandeComponent } from './commande/commande.component';
import { ListcatethgorieComponent } from './listcatethgorie/listcatethgorie.component';
import { AuthGuard } from './guerd/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'addbook', canActivate: [AuthGuard], component: AddbookComponent },
  { path: 'listbook', canActivate: [AuthGuard], component: ListbookComponent },
  { path: 'register', component: RegistreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account/:id', canActivate: [AuthGuard], component: MyaccountComponent },
  { path: 'updatebook/:id', canActivate: [AuthGuard], component: UpdatebookComponent },
  { path: 'detailsbook/:id', component: DeatilsbookComponent },
  { path: 'listcat/:id', component: ListcatethgorieComponent },
  { path: 'addcategory', component: AddcategoryComponent },
  { path: 'commande', component: CommandeComponent },


  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
