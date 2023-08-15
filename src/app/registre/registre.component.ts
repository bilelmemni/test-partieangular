import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  constructor(private servise: AuthService, private router: Router) { }
  validation = false
  formgroup: FormGroup = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    role: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)]),
  })

  image: any;
  select(e: any) {
    this.image = e.target.files[0]

  }
  add() {
    let fd = new FormData()
    fd.append('firstname', this.formgroup.value.firstname)
    fd.append('lastname', this.formgroup.value.lastname)
    fd.append('email', this.formgroup.value.email)
    fd.append('password', this.formgroup.value.password)
    fd.append('image', this.image)
    this.validation = true
    if (this.formgroup.invalid) {
      return
    }
    this.servise.addRegister(fd).subscribe(
      res => {

        this.router.navigate(['/login'])
      }, err => {
        console.log(err)
      }
    )
  }

}
