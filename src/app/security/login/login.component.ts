import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from './login.service';
import { User } from './user.model'
import { NotificationService } from '../../shared/messages/notifications.service'
import { Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private router: Router) { }



  ngOnInit() {
    this.loginForm = this.fb.group({
      password: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
    })
  }

  login() {
    this.loginService.login(this.loginForm.value.email,
      this.loginForm.value.password)
      .subscribe(user => this.notificationService.notify(`Bem vindo(a), ${user.name}`),
        response => this.notificationService.notify(response.error.message))

    this.router.navigate(['/restaurants'])
  }

}
