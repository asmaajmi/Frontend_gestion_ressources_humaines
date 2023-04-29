import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/modeles/user';
import { EmployesService } from 'src/app/services/employes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private ar:ActivatedRoute,private router:Router,private service:UserService)
{}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  onsubmit(f:NgForm):void{
    let user:User=f.value;
    this.service.login(user).subscribe(()=>{this.router.navigate(['/index'])});

   }

}
