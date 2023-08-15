import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { DetailsComponent } from './details/details.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ListbookComponent } from './listbook/listbook.component';
import { ListcatethgorieComponent } from './listcatethgorie/listcatethgorie.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PanierComponent } from './panier/panier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './providers/token.interceptor';
import { SearchPipe } from './pipes/search.pipe';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { DeatilsbookComponent } from './deatilsbook/deatilsbook.component';
import { CommandeComponent } from './commande/commande.component';


@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    AddcategoryComponent,
    DetailsComponent,
    MyaccountComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ListbookComponent,
    ListcatethgorieComponent,
    LoginComponent,
    RegistreComponent,
    NotfoundComponent,
    PanierComponent,
    SearchPipe,
    UpdatebookComponent,
    DeatilsbookComponent,
    CommandeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
