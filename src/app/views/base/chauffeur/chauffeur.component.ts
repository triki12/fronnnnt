import { Component, OnInit,Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule,AbstractControl, FormGroupName} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ValidatorFn, ValidationErrors } from '@angular/forms';
import { ChauffeurService } from '../chauffeur.service';
import { NgModule } from '@angular/core';
import {NgForm} from "@angular/forms";
import { User } from '../../../model/user.model';
/** passwords must match - custom validator */
export const confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  return password && confirm && password.value === confirm.value ? null : { 'passwordMismatch': true };
};

@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent implements OnInit {
  
  files: any;
 name:any;
 adress:any;
 tel:any;
 email:any;
 password:any;
 image:any;
  constructor( private fb: FormBuilder, private serv:ChauffeurService ) { }

  ngOnInit(): void {
    
  }
 
  OnSubmit(f :NgForm)
  {
    console.log(this.image);
  
let formData = new FormData();

formData.append('name', this.name);
formData.append('adress', this.adress);
formData.append('tel', this.tel);
formData.append('email', this.email);
formData.append('password', this.password);
formData.append("image",this.files,this.files.name);

this.serv.add(formData).subscribe(data=>{

  console.log(data);
  

});

  }
  onSelectFile($event  :Event) {

    // @ts-ignore
        this.files = $event.target.files[0];
        console.log(this.files.name);
    
      }
}
