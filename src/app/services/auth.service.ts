import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private url = '  http://localhost:3000/'

  addRegister(register: any) {
    return this.http.post(this.url + 'api/register', register)
  }
  addlogine(author: any) {
    return this.http.post(this.url + 'api/login', author)
  }
  isLogedIn() {
    let token = localStorage.getItem('token')
    if (token) {
      return true
    } else {
      return false
    }
  }

  getauthById(id: any) {
    return this.http.get(this.url + 'api/admin/' + id)//,jibou data eli 3ana lkol kima name image...
  }
  getAuthorDataFromToken() {
    let token = localStorage.getItem('token')
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1]));//ne5dhou data eli 3ana fost token eli kima id
      return data
    }

  }
}
