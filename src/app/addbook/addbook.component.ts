import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  validation = false
  formgroup: FormGroup = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Author: new FormControl('', [Validators.required,]),
    Description: new FormControl('', [Validators.required]),
    categorie: new FormControl('')
  })
  image: any;
  categories: any;
  constructor(public data: DataService, public router: Router) { }

  ngOnInit(): void {
    this.data.getallgategorie().subscribe(
      res => {
        this.categories = res

      }, err => {
        console.log(err);
      }
    )
  }
  select(e: any) {
    this.image = e.target.files[0]

  }




  add() {
    if (this.formgroup.invalid) {
      return
    }
    let fd = new FormData()
    Object.keys(this.formgroup.value).forEach((fieldname) => {
      fd.append(fieldname, this.formgroup.value[fieldname])
    })
    fd.append('image', this.image, this.image.name)
    this.validation = true;

    this.data.addlivre(fd).subscribe(
      res => {
        this.router.navigate(['/listbook'])

      }, err => {
        console.log(err)
      }
    )
  }

}
