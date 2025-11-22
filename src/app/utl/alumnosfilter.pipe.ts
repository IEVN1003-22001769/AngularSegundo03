import { Pipe, PipeTransform } from '@angular/core';
import { AlumnosUtl } from './alumnos';

@Pipe({
  name: 'alumnoFilter',
  standalone: true
})
export class AlumnoFilterPipe implements PipeTransform {

  transform(value: AlumnosUtl[],arg:string): AlumnosUtl[] {

    let filter:string=arg ? arg.toLocaleLowerCase():''
    
    return filter? value.filter((heroe:AlumnosUtl)=>
      heroe.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }

}

