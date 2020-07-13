import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    // this.auth
    //         .login(this.data)
    //         .subscribe( (data: any) => {
    //           console.log(data);
    //         });
  }

}
