import {Pipe, PipeTransform} from '@angular/core';
import {Inventory} from "../interfaces/inventory";

@Pipe({
  name: 'filterInventories'
})
export class FilterInventoriesPipe implements PipeTransform {

  transform(items: Array<Inventory>, searchText: string) {
    const data = searchText.toLowerCase();
    return items.filter(item =>
      item.storeId?.toLowerCase() === data ||
      item.employeeId?.toLowerCase() === data ||
      item.storeId?.toLowerCase().includes(data) ||
      item.employeeId?.toLowerCase().includes(data)
    );
  }

}
