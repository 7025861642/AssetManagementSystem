import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable, Subscribable, Subscriber } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isSubmitted = false;
  login:Login=new Login();
  logins: Observable <Login[]>;
  ErrorMessage:string;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,private toastr:ToastrService) { }

  ngOnInit() {
    this.logins=this.authService.getLoginDet();
    this.loginForm=this.formBuilder.group({
      username: ['',Validators.compose([Validators.required])],
      password:['',[Validators.required]]
    });

  }

  get formControls()
  {
    return this.loginForm.controls;
  }
  loginUser()
  {
    this.login.username=this.loginForm.controls.username.value;
    this.login.password=this.loginForm.controls.password.value;
    console.log(this.loginForm.value);
    this.isSubmitted=true;
    if(this.loginForm.invalid)
    {
      this.toastr.error('Enter username and password');
      return;
    }
    this.authService.Login(this.login).subscribe(x=>{
      x.forEach(element => {
       this.login.usertype=element["usertype"];
       console.log(this.login.usertype);
       if(this.login.usertype=='Admin')
       {
         localStorage.setItem('ACCESS_TOKEN',this.login.username);
         this.router.navigateByUrl('admin');
         this.toastr.success('Login Successful..!!');
       }
       else
       {
        localStorage.setItem('ACCESS_TOKEN',this.login.username);
        this.router.navigateByUrl('purchaselist');
         console.log(this.login.usertype);
         this.toastr.success('login successful...');
         
       }
     },
     error=>{
     
       this.toastr.error('Invalid Username or Password');
       
     });
     this.ErrorMessage="invalid username or password"
     console.log(this.login.usertype);  
      });
    
  }

}
