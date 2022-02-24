import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthetificationService } from '../../serviceauth/authetification.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

 
  error={
    email:null
  };
  message:any;
  wait:boolean = false;
  constructor(private auth:AuthetificationService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.wait = true;
    const email = form.value.email;
    this.auth.forgot(email).subscribe((res:any)=>{
      this.message = res.message;
      this.wait = false;
    }, (err)=>{
     this.error = err.error.errors;
     this.wait = false;
    })
  }

}
