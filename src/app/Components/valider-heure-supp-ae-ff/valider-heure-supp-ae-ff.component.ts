import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/modeles/Employe';
import { HeureSupp } from 'src/app/modeles/heure-supp';
import { EmployesService } from 'src/app/services/employes.service';
import { HeuresSupplementaireService } from 'src/app/services/heures-supplementaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-valider-heure-supp-ae-ff',
  templateUrl: './valider-heure-supp-ae-ff.component.html',
  styleUrls: ['./valider-heure-supp-ae-ff.component.css']
})
export class ValiderHeureSuppAeFFComponent {
  public tabEmployes:Employe[]=[];
  id:any
  public h: any
  idemp:any
  public e: any
  constructor(private ar:ActivatedRoute,private router:Router,private service:EmployesService,private serviceH: HeuresSupplementaireService){}

  save(f:NgForm){
    let hrs:HeureSupp=f.value;
    let id=+Number(this.ar.snapshot.paramMap.get('id'));
    console.log(id);
    console.log(hrs);

    this.serviceH.updateHeureSupplementaire(id,hrs).subscribe(()=>{this.router.navigate(['/heuresupp'])
    Swal.fire({
      icon: 'success',
      title: 'la validation est traité ',
      showConfirmButton: false,
      timer: 1500
    });
  })
   }
  ngOnInit(): void {
    this.service.getAllEmployes().subscribe(data=>{this.tabEmployes=data;});
    let id=+Number(this.ar.snapshot.paramMap.get('id'));
    this.id=this.ar.paramMap.subscribe((params)=>{
          this.id=params.get('id')
          this.serviceH.getHrById(id).subscribe(data=>{
          this.h=data;
          this.serviceH.getEmployeFromHeureSupp(this.h.id).subscribe(data2 => {
            this.e=data2.nom_emp+' '+data2.prenom_emp;
          });
        })
    });
  }
}
