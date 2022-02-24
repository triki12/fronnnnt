import { Component, OnInit } from '@angular/core';
import { ChauffeurService } from '../chauffeur.service';
import { Router,ActivatedRoute} from '@angular/router';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-modifier-chauff',
  templateUrl: './modifier-chauff.component.html',
  styleUrls: ['./modifier-chauff.component.css']
})
export class ModifierChauffComponent implements OnInit {
id:any;
files: any;
 name:any;
 adress:any;
 tel:any;
 email:any;
 password:any;
 image:any;
  constructor(private serv:ChauffeurService,private router:Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.serv.getChauffByID(this.id).subscribe(data=>{

      console.log(data);
      
    
    });
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

this.serv.updateChauffeur(this.id,formData).subscribe(data=>{

  console.log(data);
  

});

  }
  onSelectFile($event  :Event) {

    // @ts-ignore
        this.files = $event.target.files[0];
        console.log(this.files.name);
    
      }

}
