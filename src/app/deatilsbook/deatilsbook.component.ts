import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-deatilsbook',
  templateUrl: './deatilsbook.component.html',
  styleUrls: ['./deatilsbook.component.css']
})
export class DeatilsbookComponent {
  product: any;

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) { }

  id: any;
  article: any;
  cartProduct: any[] = []
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.getbooktbyid(this.id).subscribe(
      res => {
        this.article = res
      },
      err => { }
    )

  }

  addToCart1(article: any): void {
    this.cartProduct = JSON.parse(localStorage.getItem("cart") || '[]')
    let existingCartItem = this.cartProduct.find((item) => item._id == article._id);
    if (existingCartItem) {
      let prod = {
        _id: existingCartItem._id,
        Title: existingCartItem.Title,
        File: existingCartItem.File,
        Author: existingCartItem.Author,
        Quantity: Number(existingCartItem.Quantity) + 1,

      }
      this.cartProduct.splice(this.cartProduct.indexOf(existingCartItem), 1, prod)
    } else {
      this.cartProduct.push({
        _id: article._id,
        Title: article.Title,
        File: article.File,
        Author: article.Author,
        Quantity: 1

      })
    }
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))


  }


}
