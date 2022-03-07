import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginDto } from '../models/dto/login.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDto = new LoginDto();

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private loginService: AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.loginService.login(this.loginDto).subscribe(result => {
      alert(`te has logueado y tu token es: ${result.token}`)
      localStorage.setItem('token',result.token);
    })
  }

}
