import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent {
  books: any;
  constructor(private data: DataService, public router: Router) { }


  ngOnInit(): void {
    this.data.getAllBook().subscribe(
      res => {
        this.books = res
      }, err => {
        console.log(err);

      }
    )
  }
  delete(id: any) {
    this.data.deleteBook(id).subscribe(
      res => {
        this.ngOnInit()
      },
      err => {
        console.log(err);

      }
    )
  }




}
