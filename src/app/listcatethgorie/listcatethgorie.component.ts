import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listcatethgorie',
  templateUrl: './listcatethgorie.component.html',
  styleUrls: ['./listcatethgorie.component.css']
})
export class ListcatethgorieComponent {
  id: any;
  article: any
  products: any

  constructor(private data: DataService, private router: Router, private act: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this.data.getprodbycat(this.id).subscribe(
      res => {
        this.article = res
      },
      err => {
        console.log({ err });
      }
    )
  }

}
