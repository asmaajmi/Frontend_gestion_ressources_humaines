import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Employe } from '../modeles/Employe';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  host="http://127.0.0.1:8000/api";
  constructor(private client:HttpClient) { }
  public getAllEmployes():Observable<Employe[]>
  {
    return this.client.get<Employe[]>(this.host+"/getAllEmployes");
  }

  public createEmploye(employe:Employe):Observable<any>{
    //const headers = new HttpHeaders;
    return this.client.post<any>(this.host+"/createEmploye",employe).pipe(
      catchError( error => {
      if(error.status===500){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Quelque chose est mal passé!',
        })
      }
      return throwError(error);
    }));
  }


  public getEmployeById(id:number):Observable<void>
  {
    return this.client.get<void>(this.host+"/getEmployeById/"+id);
  }

  updateEmployee(employe: Employe):Observable<Employe>{
    return this.client.put<Employe>(this.host+"/updateEmp/"+employe.id,employe);
  }

  public deleteEmploye(id:number):Observable<Employe>
  {
    return this.client.delete<Employe>(this.host+"/deleteEmploye/"+id);
  }
}
