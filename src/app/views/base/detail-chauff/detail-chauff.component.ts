import { Component, OnInit } from '@angular/core';
import { ChauffeurService } from '../chauffeur.service';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detail-chauff',
  templateUrl: './detail-chauff.component.html',
  styleUrls: ['./detail-chauff.component.css']
})
export class DetailChauffComponent implements OnInit {
id:any;
user:any;
  constructor(private serv:ChauffeurService,private router:Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.serv.getChauffByID(this.id).subscribe(data=>{

      console.log(data);
      this.user=data;
      console.log(this.user);
      
    
    });
  }

}
