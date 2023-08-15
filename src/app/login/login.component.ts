import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) { }


  validation = false
  formgroup: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)]),
  })

  log() {
    this.validation = true
    if (this.formgroup.invalid) {
      return
    }
    this.auth.addlogine(this.formgroup.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.mytoken)
        this.router.navigate(['/home'])
      }, err => {
        console.log(err);

      }
    )
  }

}
