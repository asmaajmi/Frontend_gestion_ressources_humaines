import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { User } from '../modeles/user';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  host="http://127.0.0.1:8000/api";
  public  username!: string;
  private loggedIn:boolean = false;

  constructor(private client:HttpClient) { }
  public login(user1:User):Observable<void>
  {
    return this.client.post<void>(this.host+"/login",user1).pipe(
      catchError( error => {
      if(error.status===401){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Authentification Erroné mot de passe ou email ou nom est erroné',
          footer: '<a href="http://localhost:4200/create">Impossible de connecter vous pouvez creer un nouveau compte </a>'
        })
      }
      return throwError(error);
    }),(map(user => {
      // sauvegarde de l'utilisateur dans le local storage pour rester connecté
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;

      }))
      
    )
    
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  //public getUserName():Observable<User>
  //{
  //  return this.client.get<User>(this.host+"/user");
  //}
  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
  public createAccout(user:User):Observable<void>
  {
    return this.client.post<void>(this.host+"/register",user);
  }
}
