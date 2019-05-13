import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';


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

  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

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
      this.flashMessage.show("PLease use a valid email!",  {cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

  }
}
