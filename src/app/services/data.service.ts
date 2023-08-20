import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private router: Router) { }
  private url = '  http://localhost:3000/'

  addlivre(product: any) {
    return this.http.post(this.url + 'api/livre', product)
  }
  getAllBook() {
    return this.http.get(this.url + 'api/livre')
  }
  deleteBook(id: any) {
    return this.http.delete(this.url + 'api/livre/' + id)
  }
  updateBook(id: any, data: any) {
    return this.http.put(this.url + 'api/livre/' + id, data)
  }
  getbooktbyid(id: any) {
    return this.http.get(this.url + 'api/livre/' + id)
  }
  downloadBook(id: any) {
    return this.http.post(this.url + 'api/download/', id)
  }
  downloadBookk() {
    return this.http.post(this.url + 'api/download', {});
  }



  addToCart(product: any) {
    return this.http.post(this.url + 'api/panier', product);
  }

  getCartItems() {
    return this.http.get(this.url + 'api/panier');
  }
  deletepanier(id: any) {
    return this.http.delete(this.url + 'api/panier/' + id);
  }
  addcommande(commande: any) {
    return this.http.post(this.url + 'api/Commande', commande);
  }
  getcommande() {
    return this.http.get(this.url + 'api/Commande');
  }
  deletecommande(id: any) {
    return this.http.delete(this.url + 'api/Commande/' + id);
  }
  getallgategorie() {
    return this.http.get(this.url + 'api/Categorie')
  }
  addcategorie(category: any) {
    return this.http.post(this.url + 'api/Categorie', category)
  }
  getprodbycat(id: any) {
    return this.http.get(this.url + 'api/Categorie/getproducts/' + id)
  }
  getcommandebyid(id: any) {
    return this.http.get(this.url + 'api/Commande/' + id)
  }
}
