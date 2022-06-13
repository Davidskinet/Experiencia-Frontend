import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 alert = false;
  loginForm!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
  ) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  get emailField(): any {
    return this.loginForm.get('email');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }
  loginFormSubmit(){
    console.log(this.loginForm.value.email, "Juan Pablo Camelo");
    if(!(this.loginForm.value.email === 'admin@gmail.com' && 
      this.loginForm.value.password === 'admin123')) return this.alert = true;
      this.router.navigate(['../home', ], { relativeTo: this.activatedRoute }); 
  }

}
