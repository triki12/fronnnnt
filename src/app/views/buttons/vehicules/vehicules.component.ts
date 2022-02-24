import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceVehiculeService } from '../service-vehicule.service';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit {
  error: any;
  vehicules:any;
   public filterQuery = '';
   constructor(private serv:ServiceVehiculeService,private router:Router) { }
 
   ngOnInit(): void {
     this.getvehi();
   console.log(this.vehicules) }
   getvehi(){
     this.serv.getVehicules().subscribe(
       res=>{
         console.log(res);
         this.vehicules=res;
         
       }
     )
   }
 
   SuprimerChauffeur(id:any){
     console.log(id);
     this.serv.deleteVehicule(id).subscribe(
       
       res=>{
         console.log(res);
         this.getvehi();
         
       }
     )
 
   }
   /*
   details(id:any){
     this.router.navigate(['base/detailCauff/'+id])
   }
   updateChauffeur(id:any){
     this.router.navigate(['base/updateCauff/'+id])
   }
 */

}
