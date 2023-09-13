import {Component} from '@angular/core';
import {Store} from "../../../../shared/interfaces/store";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {
  template: string = "LIST";



  getTemplate(template: string) {
    this.template = template;
  }
}
