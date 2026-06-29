import { Component, Input } from '@angular/core';

@Component({
  selector: 'material-angular-select',
  template: `
    <div class="mas-select" [class.mas-select--fixed-height]="fixHeight">
      <label *ngIf="label" class="mas-select__label">{{ label }}</label>
      <select class="mas-select__input" [attr.name]="name" [value]="currentValue">
        <option *ngFor="let item of data" [value]="item">{{ item }}</option>
      </select>
    </div>
  `,
  styles: [`
    .mas-select {
      position: relative;
      display: inline-block;
      width: 100%;
    }
    .mas-select__label {
      display: block;
      margin-bottom: 4px;
      font-size: 12px;
      opacity: 0.7;
    }
    .mas-select__input {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      background: transparent;
      color: inherit;
      font-size: 14px;
      appearance: auto;
    }
    .mas-select--fixed-height .mas-select__input {
      height: 36px;
    }
  `],
})
export class MaterialAngularSelectComponent {
  @Input() data: string[] = [];
  @Input() currentValue: string = '';
  @Input() fixHeight: boolean = false;
  @Input() name: string = '';
  @Input() label: string = '';
}
