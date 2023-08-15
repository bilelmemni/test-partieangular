import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private data: DataService) { }

  Searchtext: any;
  books: any;

  ngOnInit(): void {
    this.data.getAllBook().subscribe(
      res => {
        this.books = res
      }, err => {
        console.log(err);

      }
    )

  }


}
