import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
  validation = false
  categories: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),

  })
  constructor(private data: DataService, private router: Router) { }

  addcat() {
    this.validation = true
    if (this.categories.invalid) {
      return
    }
    this.data.addcategorie(this.categories.value).subscribe(
      (res: any) => {
        this.router.navigate(['/addbook'])
      }, err => {
        console.log(err);

      }
    )
  }

}
