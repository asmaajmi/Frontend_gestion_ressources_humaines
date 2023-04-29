import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/modeles/Employe';
import { EmployesService } from 'src/app/services/employes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-employes',
  templateUrl: './create-employes.component.html',
  styleUrls: ['./create-employes.component.css']
})
export class CreateEmployesComponent implements OnInit{
  constructor(private ar:ActivatedRoute,private router:Router,private service:EmployesService)
  {}

   /* Variabe to store file data */
   public file!:File
   /* File onchange event */
   fileEvent(e:any){
       this.file = e.target.files[0];
   }

  save(f:NgForm){
    let employe:Employe=f.value;
  
    this.service.createEmploye(employe).subscribe(()=>{this.router.navigate(['/index'])
      Swal.fire({
        icon: 'success',
        title: 'Employé ajouté avec succé',
        showConfirmButton: false,
        timer: 1500
      });
    })
  }
  ngOnInit(): void {
    //this.produitsf=this.tabProduits;
    }
}
