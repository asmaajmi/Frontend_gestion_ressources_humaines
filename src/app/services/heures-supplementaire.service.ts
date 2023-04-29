import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HeureSupp } from '../modeles/heure-supp';
import { Employe } from '../modeles/Employe';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HeuresSupplementaireService {
  host="http://127.0.0.1:8000/api";
  constructor(private client:HttpClient) { }
  public getAllHeureSupp():Observable<HeureSupp[]>
  {
    return this.client.get<HeureSupp[]>(this.host+"/AllHeuresSupp");
  }

  //public createHeureSupp(hr:HeureSupp):Observable<void>{
  //  //const headers = new HttpHeaders;
  //  return this.client.post<void>(this.host+"/CreateHeuresSupp",hr);
  //}

  public getEmployeFromHeureSupp(id:number):Observable<Employe>
  {
    return this.client.get<Employe>(this.host+"/getEmployeFromHeureSupp/"+id);
  }


  public createHeureSupp(heureSupp:HeureSupp):Observable<any>{
    //const headers = new HttpHeaders;
    return this.client.post<any>(this.host+"/CreateHeuresSupp",heureSupp)
    .pipe(
      catchError( error => {
      if(error.status===500){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Quelque chose est mal passé',
        })
      }
      return throwError(error);
    }));
  }

  public getHrById(id:number):Observable<void>
  {
    return this.client.get<void>(this.host+"/getHeureById/"+id);
  }

  public updateHeureSupplementaire(id: number, heuresupplementaire: HeureSupp): Observable<any> {
    return this.client.put<any>(this.host+"/editValidation/"+id, heuresupplementaire);
  }
}
