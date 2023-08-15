import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent {
  constructor(private auth: AuthService, private act: ActivatedRoute) { }
  id: any;
  author: any;
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id')
    this.auth.getauthById(this.id).subscribe(
      res => {
        this.author = res;
      }, err => {
        console.log(err);

      }
    );

  }

}
