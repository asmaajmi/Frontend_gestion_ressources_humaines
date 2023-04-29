import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/modeles/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar-sidebar',
  templateUrl: './navbar-sidebar.component.html',
  styleUrls: ['./navbar-sidebar.component.css',]
})
export class NavbarSidebarComponent implements OnInit{
  public User!:User;
  constructor(private ar:ActivatedRoute,private router:Router,public userService: UserService){
  }

  ngOnInit(): void {
    ////this.produitsf=this.tabProduits;
    //this.ar.paramMap.subscribe(params=>{
    //    this.userService.getUserName().subscribe(data=>{
    //      this.User=data; 
    //      console.log(this.User)
    //    });
    //})
}
logout(){
  this.userService.logout();
  this.router.navigate(['/home'])
}
}
