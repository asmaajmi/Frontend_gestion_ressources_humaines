import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployesService } from 'src/app/services/employes.service';

  

@Component({
  selector: 'app-fiche-employe',
  templateUrl: './fiche-employe.component.html',
  styleUrls: ['./fiche-employe.component.css']
})
export class FicheEmployeComponent implements OnInit {
  public emp: any;
  id:any;
  closeResult = '';

  constructor(private ar:ActivatedRoute,private router:Router,private service:EmployesService){}

  ngOnInit(){
    let id=+Number(this.ar.snapshot.paramMap.get('id'));
        this.id=this.ar.paramMap.subscribe((params)=>{
              this.id=params.get('id')
              this.service.getEmployeById(id).subscribe(data=>{
              this.emp=data;
        })
    });
  }
}
