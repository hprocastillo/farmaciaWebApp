import {Component, EventEmitter, Output} from '@angular/core';
import {Product} from "../../../../shared/interfaces/product";
import {InventoryDetail} from "../../../../shared/interfaces/inventory";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-inventories-new',
  templateUrl: './inventories-new.component.html',
  styleUrls: ['./inventories-new.component.scss']
})
export class InventoriesNewComponent {
  @Output() outTemplate = new EventEmitter<string>();

  newInventoryDetail: InventoryDetail[] = [
    {
      inventoryId: "01",
      code_pro: "20859",
      description_pro: "ENSURE ADVANCE /HMB VAINI 850",
      code_lab: "ABBO",
      description_lab: "ABBOT",
      stock_e: 1,
      stock_f: 0,
      stock_f_enable: false,
      status: false
    },
    {
      inventoryId: "01",
      code_pro: "36425",
      description_pro: "BELARA CD X 28 COMP.",
      code_lab: "GRUN",
      description_lab: "ABL GRUNENTHAL PERUANA S.A.",
      stock_e: 1,
      stock_f: 0,
      stock_f_enable: false,
      status: false
    },
    {
      inventoryId: "01",
      code_pro: "35805",
      description_pro: "ETORICOXIB 90 MG X 60 TAB",
      code_lab: "AJR",
      description_lab: "AJR LABS",
      stock_e: 1,
      stock_f: 0,
      stock_f_enable: false,
      status: false
    },
    {
      inventoryId: "01",
      code_pro: "42425",
      description_pro: "NEUROTOL 25 MG X 10 TB REC2.1",
      code_lab: "ACF",
      description_lab: "AC FARMA",
      stock_e: 1,
      stock_f: 0,
      stock_f_enable: false,
      status: false
    },
    {
      inventoryId: "01",
      code_pro: "27067",
      description_pro: "RISDONE-2  2MG X 50 TAB<",
      code_lab: "ACCO",
      description_lab: "ACCORD HEALTHCARE SAC.",
      stock_e: 1,
      stock_f: 0,
      stock_f_enable: false,
      status: false
    },

  ];


  table: boolean = false;

  constructor(private modalService: NgbModal,) {


  }

  openModalStatus(modalStatus: any) {
    this.modalService.open(modalStatus, {centered: true, backdrop: "static"});
  }


  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  getTable() {
    this.table = true;
  }

  enableStockF(code: string) {
    for (let i: number = 0; i < this.newInventoryDetail.length; i++) {
      if (this.newInventoryDetail[i].code_pro === code) {
        this.newInventoryDetail[i].stock_f_enable = true;
        this.newInventoryDetail[i].status = false;
      }
    }

  }

  saveStatus(code: string) {
    for (let i: number = 0; i < this.newInventoryDetail.length; i++) {
      if (this.newInventoryDetail[i].code_pro === code) {
        this.newInventoryDetail[i].status = true;
      }
    }
    this.modalService.dismissAll();
  }


}
