import {Component, EventEmitter, Output} from '@angular/core';
import {Store} from "../../../../shared/interfaces/store";

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent {
  @Output() outTemplate = new EventEmitter<string>();
  page: number = 1;
  pageSize: number = 8;
  searchText:string="";

  listStores: Store[] = [
    {
      code: 'CHO001',
      description: 'Chorrillos 01',
      address: 'Av. el sol 3409',
      phone: '984-923787'
    },
    {
      code: 'CHO002',
      description: 'Chorrillos 02',
      address: 'Av. Matellini 1093',
      phone: '932-073722'
    },
    {
      code: 'CHO003',
      description: 'Chorrillos 03',
      address: 'Jr. Guatemala 144',
      phone: '948-239943'
    },
    {
      code: 'CHO004',
      description: 'Chorrillos 04',
      address: 'Av. Republica de panama 2041',
      phone: '900-238745'
    },
    {
      code: 'CHO005',
      description: 'Chorrillos 05',
      address: 'Av. Lima Tambo 432',
      phone: '920-235453'
    },
    {
      code: 'CHO006',
      description: 'Chorrillos 06',
      address: 'Av. el sol 3409',
      phone: '984-923787'
    },
    {
      code: 'VES001',
      description: 'Villa el Salvador 01',
      address: 'Av. Matellini 1093',
      phone: '932-073722'
    },
    {
      code: 'VES002',
      description: 'Villa el Salvador 02',
      address: 'Jr. Guatemala 144',
      phone: '948-239943'
    },
    {
      code: 'VES003',
      description: 'Villa el Salvador 03',
      address: 'Av. Jose Galvez',
      phone: '900-238745'
    },
    {
      code: 'VES004',
      description: 'Villa el Salvador 04',
      address: 'Av. Lima Tambo 432',
      phone: '920-235453'
    },
    {
      code: 'VES005',
      description: 'Villa el Salvador 05',
      address: 'Av. el sol 3409',
      phone: '984-923787'
    },
    {
      code: 'BAR001',
      description: 'Barranco 01',
      address: 'Av. Matellini 1093',
      phone: '932-073722'
    },
    {
      code: 'BAR002',
      description: 'Barranco 02',
      address: 'Jr. Guatemala 144',
      phone: '948-239943'
    },
    {
      code: 'BAR003',
      description: 'Barranco 03',
      address: 'Av. Republica de panama 2041',
      phone: '900-238745'
    },
    {
      code: 'SBJ001',
      description: 'San Borja 01',
      address: 'Av. Lima Tambo 432',
      phone: '920-235453'
    },
    {
      code: 'SBJ002',
      description: 'San Borja 02',
      address: 'Av. el sol 3409',
      phone: '984-923787'
    },
    {
      code: 'SBJ003',
      description: 'San Borja 03',
      address: 'Av. Matellini 1093',
      phone: '932-073722'
    },
    {
      code: 'SBJ004',
      description: 'San Borja 04',
      address: 'Jr. Guatemala 144',
      phone: '948-239943'
    },
    {
      code: 'SMG001',
      description: 'San Miguel 01',
      address: 'Av. Republica de panama 2041',
      phone: '900-238745'
    },
    {
      code: 'SMG002',
      description: 'San Miguel 02',
      address: 'Av. Lima Tambo 432',
      phone: '920-235453'
    },
    {
      code: 'SMG003',
      description: 'San Miguel 03',
      address: 'Av. Matellini 1093',
      phone: '932-073722'
    },
    {
      code: 'SMG004',
      description: 'San Miguel 04',
      address: 'Jr. Guatemala 144',
      phone: '948-239943'
    },
  ];

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }
}
