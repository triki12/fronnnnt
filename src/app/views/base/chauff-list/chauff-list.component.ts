import { Component, OnInit } from '@angular/core';
import { ChauffeurService } from '../chauffeur.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chauff-list',
  templateUrl: './chauff-list.component.html',
  styleUrls: ['./chauff-list.component.css']
})
export class ChauffListComponent implements OnInit {
  error: any;
 chauffeurs:any;
  public filterQuery = '';
  constructor(private serv:ChauffeurService,private router:Router) { }

  ngOnInit(): void {
    this.getChauf();
  console.log(this.chauffeurs) }
  getChauf(){
    this.serv.getChauffeurs().subscribe(
      res=>{
        console.log(res);
        this.chauffeurs=res;
        
      }
    )
  }

  SuprimerChauffeur(id:any){
    console.log(id);
    this.serv.deleteChauffeurs(id).subscribe(
      
      res=>{
        console.log(res);
        this.getChauf();
        
      }
    )

  }
  detailsChauffeur(id:any){
    this.router.navigate(['base/detailCauff/'+id])
  }
  updateChauffeur(id:any){
    this.router.navigate(['base/updateCauff/'+id])
  }
  
}
