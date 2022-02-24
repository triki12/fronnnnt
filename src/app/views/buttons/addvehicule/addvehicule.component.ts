import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ServiceVehiculeService } from '../service-vehicule.service';

@Component({
  selector: 'app-addvehicule',
  templateUrl: './addvehicule.component.html',
  styleUrls: ['./addvehicule.component.css']
})
export class AddvehiculeComponent implements OnInit {
  marque:any
  modele:any
  matricule:any
  constructor(private fb: FormBuilder, private serv:ServiceVehiculeService) { }

  ngOnInit(): void {
  }
  
  OnSubmit(f :NgForm)
  {
  
let formData = new FormData();

formData.append('marque', this.marque);
formData.append('matricule', this.matricule);
formData.append('modele', this.modele);


this.serv.add(formData).subscribe(data=>{

  console.log(data);
  

});

  }

}
