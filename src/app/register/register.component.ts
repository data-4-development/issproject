import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  email:String;
  phonenumber:Number;
  password:String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

onRegisterSubmit(){
  const user = {
    username: this.username,
    email: this.email,
    phonenumber: this.phonenumber,
    password: this.password

  }

    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show("PLease fill in all fields!", {cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show("Please use a valid email!",  {cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

   

  
    // register user
    this.authService.registerUser(user).subscribe((data: any) => {
      if(data.success){
        this.flashMessage.show("You are now registered and can log in ",  {cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      }else {
        this.flashMessage.show("something went wrong ",  {cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });

  }
}
