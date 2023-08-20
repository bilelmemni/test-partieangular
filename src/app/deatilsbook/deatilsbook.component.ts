import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-deatilsbook',
  templateUrl: './deatilsbook.component.html',
  styleUrls: ['./deatilsbook.component.css']
})
export class DeatilsbookComponent {
  id: any;
  book: any;
  bookk: any;
  message = '';

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.getbooktbyid(this.id).subscribe(
      res => {
        this.bookk = res
      },
      err => {
        console.log(err);
      }
    )
  }


  downloadBookk(): void {
    this.data.downloadBookk().subscribe(
      () => {
        this.message = 'Download successful.';
        this.downloadBook()
      },
      error => {
        this.message = error.error.message;
      }
    );
  }
  downloadBook(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.getbooktbyid(this.id).subscribe(
      res => {
        this.book = res
        this.addcomande()
      },
      err => { }
    )
  }

  addcomande() {
    this.data.addcommande(this.book).subscribe(
      res => {

      },
      err => {
        console.log(err);
      }
    )

  }


}
