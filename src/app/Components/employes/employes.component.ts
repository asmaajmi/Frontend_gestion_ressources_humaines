import { Component, OnInit, ViewChild, ElementRef, TemplateRef, Inject} from '@angular/core';
import { MatDialog ,MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/modeles/Employe';
import { EmployesService } from 'src/app/services/employes.service';
import Swal from 'sweetalert2';
import { PopupComponent } from '../popup/popup.component';

declare var require: any;
const htmlToPdfmake = require("html-to-pdfmake");
var pdfMake = require('pdfmake/build/pdfmake');
var pdfFonts = require('pdfmake/build/vfs_fonts');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css',
  '../navbar-sidebar/navbar-sidebar.component.css']
})

export class EmployesComponent implements OnInit {
  public tabEmployes:Employe[]=[];
  public tabEmployesf:Employe[]=[];
  public selectedEmploye!:Employe;
  public data:Employe[]=[];

  page:number=1;

  constructor(private ar:ActivatedRoute,private router:Router,private service:EmployesService, private dialog: MatDialog){
  }
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
    pdfMake.createPdf(documentDefinition).open(); 

  }


  public supprimerProduit(employe:Employe){
      this.ar.paramMap.subscribe(params=>{
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
          this.service.deleteEmploye(employe.id).subscribe(()=>this.tabEmployesf.splice(this.tabEmployesf.indexOf(employe),1))
        
      })
    }
 
  set text(a:string){
    this.tabEmployesf=this.filtrer(a);
  }
  openDialog(id: number) {
    this.ar.paramMap.subscribe(params=>{
    this.service.getEmployeById(id).subscribe(data => { 
      const dialogRef = this.dialog.open(PopupComponent, {
      width: '900px',
      height:'600px',
      position: { top: '-47%', left: '30%' },
      data: data});

    });

  });
  }
  filtrer(a:string){
    return this.tabEmployes.filter(x=>x.prenom_emp.indexOf(a)!=-1);
  }
  ngOnInit(): void {
    //this.produitsf=this.tabProduits;
    this.ar.paramMap.subscribe(params=>{
        this.service.getAllEmployes().subscribe(data=>{
          this.tabEmployes=data; this.tabEmployesf=data;
        })
    })
}
}
