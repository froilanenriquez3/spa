import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    let result;

    if (!items || !searchText) {
      result = [];
    }else{
      searchText = searchText.toLocaleLowerCase();
      result = items.filter(it => {
        return it.name.toLocaleLowerCase().includes(searchText);
      });
    }
    return result;

  }

}
