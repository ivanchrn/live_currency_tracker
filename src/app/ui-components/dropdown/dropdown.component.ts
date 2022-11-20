import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  host: {
    "(document: mousedown)": "onClick( $event )"
  }
})
export class DropdownComponent {
  @Input()
  public dropdownValuesList: string[] = [];

  @Output()
  public dropdownSelectedValue: EventEmitter<string> = new EventEmitter<string>();

  public selectedValue: string = 'Please select';

  public showValueList: boolean = false;

  public toggleColor: string = 'transparent';

  constructor(private _eref: ElementRef) { }

  public openDropdown(): void {
    this.showValueList = !this.showValueList;
    this.changeToggle();
  }

  public selectValue(value: string): void {
    this.selectedValue = value;
    this.dropdownSelectedValue.emit(value);
    this.showValueList = false;
    this.changeToggle();
  }

  private changeToggle(): void {
    this.showValueList ? this.toggleColor = '#e0aaff' : this.toggleColor = 'transparent';
  }
}
