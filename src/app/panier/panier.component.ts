import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  constructor(private data: DataService, public router: Router) { }
  article: any
  total: any = 0
  success = false
  ngOnInit(): void {
    this.article = JSON.parse(localStorage.getItem('cart') || '[]')
    this.Totalquantity()
  }
  addAmount(index: number) {
    this.article[index].Quantity++
    localStorage.setItem("cart", JSON.stringify(this.article))

    this.Totalquantity()
  }
  minAmount(index: number) {
    if (this.article[index].Quantity > 1) {
      this.article[index].Quantity--
    }
    else {
      this.article.splice(index, 1)
    }
    localStorage.setItem("cart", JSON.stringify(this.article))
    this.Totalquantity()
  }




  Totalquantity() {
    this.total = 0
    this.article = JSON.parse(localStorage.getItem('cart') || '[]')
    this.article.map((item: any) => {
      this.total += item.Quantity
    })

  }

  delete(id: any) {
    this.article.splice(id, 1)
    localStorage.setItem("cart", JSON.stringify(this.article))

  }
  download() {
    this.article = JSON.parse(localStorage.getItem('cart') || '[]')
    if (this.total < 6) {
      this.addcomande()

    } else {
      alert('votre solde pur telecharger book insufisant')
    }
  }


  addcomande() {
    this.data.addcommande(this.article).subscribe(
      res => {
        console.log(this.article);
        this.success = true
      },
      err => {
        console.log(err);
      }
    )

  }


}
