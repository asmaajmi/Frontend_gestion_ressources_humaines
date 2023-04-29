import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/modeles/Employe';
import { HeureSupp } from 'src/app/modeles/heure-supp';
import { EmployesService } from 'src/app/services/employes.service';
import { HeuresSupplementaireService } from 'src/app/services/heures-supplementaire.service';

@Component({
  selector: 'app-heure-supplementaire',
  templateUrl: './heure-supplementaire.component.html',
  styleUrls: ['./heure-supplementaire.component.css',  '../navbar-sidebar/navbar-sidebar.component.css']
})
export class HeureSupplementaireComponent implements OnInit {
  public HeureSupp:HeureSupp[]=[];
  public HeureSuppA:HeureSupp[]=[];
  public tabEmployes:Employe[]=[];
  public employe:Employe[]=[];

  constructor(private ar:ActivatedRoute,private router:Router,private serviceH:HeuresSupplementaireService, private serviceE:EmployesService){
  }

  page:number=1;

  ngOnInit(): void {
    //this.produitsf=this.tabProduits;
    this.ar.paramMap.subscribe(params=>{
        this.serviceH.getAllHeureSupp().subscribe(data1=>{
          this.HeureSupp=data1; 
          for (let i = 0; i < this.HeureSupp.length; i++) {
            this.serviceH.getEmployeFromHeureSupp(this.HeureSupp[i].id).subscribe(data2 => {
              this.employe .push(data2);
            });
          }
        })
    });
    console.log(this.employe);


  }

}
