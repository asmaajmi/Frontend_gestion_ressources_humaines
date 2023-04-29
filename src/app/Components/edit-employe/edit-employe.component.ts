import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/modeles/Employe';
import { HeureSupp } from 'src/app/modeles/heure-supp';
import { EmployesService } from 'src/app/services/employes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {

  public e: any
  id:any
  constructor(private ar:ActivatedRoute,private router:Router,private service:EmployesService){}
  save(f:NgForm){
    let Emp:Employe=f.value;
    let id=+Number(this.ar.snapshot.paramMap.get('id'));
    console.log(id);
    console.log(Emp);

    this.service.updateEmployee(Emp).subscribe(()=>{this.router.navigate(['/index'])
      Swal.fire({
        icon: 'success',
        title: 'Employé modifié avec succés',
        showConfirmButton: false,
        timer: 1500
      });
    })
  }
  ngOnInit(){
    let id=+Number(this.ar.snapshot.paramMap.get('id'));
        this.id=this.ar.paramMap.subscribe((params)=>{
              this.id=params.get('id')
              this.service.getEmployeById(id).subscribe(data=>{
              this.e=data;
        })
    })
    console.log(this.e);
  }
  public file!:File

  fileEvent(e:any){
    this.file = e.target.files[0];
}
}
