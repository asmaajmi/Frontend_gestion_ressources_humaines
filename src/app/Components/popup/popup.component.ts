import { DataSource } from '@angular/cdk/table';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/modeles/Employe';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css',
  '../navbar-sidebar/navbar-sidebar.component.css']
})
export class PopupComponent {
  public id:any;
  public e:any;
  document: any;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employe,private ar:ActivatedRoute,private router:Router,private service:EmployesService
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    let id=+Number(this.ar.snapshot.paramMap.get('id'));
    this.id=this.ar.paramMap.subscribe((params)=>{
      this.id=params.get('id') 
        this.service.getEmployeById(id).subscribe(data=>{
        this.e=data;
      }); 
      console.log(this.id);
  
    })
    
  }
}
