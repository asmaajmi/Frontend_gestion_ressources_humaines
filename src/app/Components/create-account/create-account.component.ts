import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/modeles/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private router:Router,private service:UserService)
  {}
  ngOnInit(): void {
  }
   
  onsubmit(f:NgForm):void{
    let user:User=f.value;
    this.service.createAccout(user).subscribe(()=>{this.router.navigate(['/login'])});
   }
}
