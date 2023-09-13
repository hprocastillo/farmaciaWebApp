import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-module-button',
  templateUrl: './module-button.component.html',
  styleUrls: ['./module-button.component.scss']
})
export class ModuleButtonComponent {
  @Input() moduleName: string | undefined;
  @Input() moduleIcon: string | undefined;
  @Input() moduleUrl: string | undefined;
}
