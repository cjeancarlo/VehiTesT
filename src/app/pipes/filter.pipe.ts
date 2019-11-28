import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(texto: any[], searchText: string, field: string): any[] {
    if (!texto) {return [];}
    if (!searchText) {return texto;}
    searchText = searchText.toLowerCase();
    return texto.filter(it => {
      return it[field].toString().toLowerCase().indexOf(searchText) === 0;
    });
  }


}
