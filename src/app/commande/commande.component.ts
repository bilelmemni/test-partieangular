import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent {
  constructor(private data: DataService,) { }
  id: any;
  listproduct: any
  products: any
  ngOnInit(): void {
    this.data.getcommande().subscribe(
      res => {
        this.products = res
      }, err => {
        console.log(err);

      }
    )
  }

  openModal(id: any) {
    this.data.getcommandebyid(id).subscribe(
      res => {
        this.id = id
        this.listproduct = res
      }, err => {
        console.log(err)
      }
    )

  }
  deletecommande(id: any) {
    this.data.deletecommande(id).subscribe(
      res => {
        this.ngOnInit()
      },
      err => {
        console.log(err);

      }
    )
  }


}
