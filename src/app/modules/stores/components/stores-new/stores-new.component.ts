import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-stores-new',
  templateUrl: './stores-new.component.html',
  styleUrls: ['./stores-new.component.scss']
})
export class StoresNewComponent {
  @Output() outTemplate = new EventEmitter<string>();

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  openModalSave(){

  }
}
