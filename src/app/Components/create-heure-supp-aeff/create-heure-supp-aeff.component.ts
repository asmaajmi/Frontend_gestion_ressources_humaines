import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/modeles/Employe';
import { HeureSupp } from 'src/app/modeles/heure-supp';
import { EmployesService } from 'src/app/services/employes.service';
import { HeuresSupplementaireService } from 'src/app/services/heures-supplementaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-heure-supp-aeff',
  templateUrl: './create-heure-supp-aeff.component.html',
  styleUrls: ['./create-heure-supp-aeff.component.css']
})
export class CreateHeureSuppAEffComponent implements OnInit {
  public tabEmployes:Employe[]=[];
  constructor(private ar:ActivatedRoute,private router:Router,private service:EmployesService,private serviceH: HeuresSupplementaireService){}

  save(f:NgForm){
       let hrs:HeureSupp=f.value;
  
    this.serviceH.createHeureSupp(hrs).subscribe(()=>{this.router.navigate(['/heuresupp'])
    Swal.fire({
      icon: 'success',
      title: 'Heure supplémentaire ajouté avec succés',
      showConfirmButton: false,
      timer: 1500
    });
  })
   }
  ngOnInit(): void {
    this.service.getAllEmployes().subscribe(data=>{this.tabEmployes=data;});
    }
}
