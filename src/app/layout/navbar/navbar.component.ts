import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  catigory: any;
  product: any;


  constructor(public auth: AuthService, private data: DataService, private router: Router) {
  }
  ngOnInit(): void {
    this.getcategory()
  }
  getcategory() {
    this.data.getallgategorie().subscribe(
      res => {
        this.catigory = res

      }, err => {
        console.log(err);

      }
    )
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])

  }


}

