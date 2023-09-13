import { Pipe, PipeTransform } from '@angular/core';
import {Store} from "../interfaces/store";

@Pipe({
  name: 'filterStores'
})
export class FilterStoresPipe implements PipeTransform {

  transform(items: Array<Store>, searchText: string) {
    const data = searchText.toLowerCase();
    return items.filter(item =>
      item.description?.toLowerCase() === data ||
      item.code?.toLowerCase() === data ||
      item.description?.toLowerCase().includes(data) ||
      item.code?.toLowerCase().includes(data)
    );
  }
}
