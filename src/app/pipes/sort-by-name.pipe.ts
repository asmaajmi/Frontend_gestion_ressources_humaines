import { Pipe, PipeTransform } from '@angular/core';
import { Employe } from '../modeles/Employe';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(value: Employe[]): Employe[] {
    value.sort((a,b)=>{
      if(a.prenom_emp<b.prenom_emp)return -1;
      else if(a.prenom_emp>b.prenom_emp) return 1;
      else return 0;
    })
    return value;
  }

}
