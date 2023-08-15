import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent {
  id: any;
  image: any;
  categories: any;
  validation = false
  formgroup: FormGroup = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Author: new FormControl('', [Validators.required,]),
    Description: new FormControl('', [Validators.required]),
    categorie: new FormControl('')
  })
  constructor(private data: DataService, private act: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this.data.getbooktbyid(this.id).subscribe(
      res => {
        this.getallgategorie()
        this.formgroup.patchValue(res)
      },
      err => {
        console.log(err);
      }
    )
  }
  getallgategorie() {
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
  update() {
    if (this.formgroup.invalid) {
      return
    }
    let fd = new FormData()
    Object.keys(this.formgroup.value).forEach((fieldname) => {
      fd.append(fieldname, this.formgroup.value[fieldname])
    })
    fd.append('image', this.image, this.image.name)
    this.validation = true;

    this.data.updateBook(this.id, fd).subscribe(
      res => {
        this.router.navigate(['/listbook'])

      }, err => {
        console.log(err)
      }
    )
  }

}
