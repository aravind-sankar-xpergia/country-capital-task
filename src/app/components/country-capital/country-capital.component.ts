import { Component, Input, OnInit, TrackByFunction } from '@angular/core';

type Data = { [key: string]: string };

@Component({
  selector: 'app-country-capital',
  templateUrl: './country-capital.component.html',
  styleUrls: ['./country-capital.component.css']
})
export class CountryCapitalComponent implements OnInit {
  @Input() data: Data = {};

  buttonList: string[] = [];

  previousSelection: string = '';
  currentSelection: string = '';
  error = false;

  constructor() { }
  
  ngOnInit(): void {
    this.buttonList = [
      ...Object.values(this.data),
      ...Object.keys(this.data)
    ].sort(() => Math.random() - 0.5);    
  }

  handleButtonSelect(buttonName: string): void {
    this.currentSelection = buttonName;

    if (this.error || !this.previousSelection) {
      this.previousSelection = this.currentSelection;
      this.error = false;
      return
    }

    if(this.data[this.currentSelection] === this.previousSelection || this.data[this.previousSelection] === this.currentSelection) {
      this.buttonList = this.buttonList.filter(button => ![this.previousSelection, this.currentSelection].includes(button));
      this.previousSelection = '';
      this.error = false;
      return;
    }
    
    if (this.previousSelection !== this.currentSelection) {
      this.error = true;
    }
  }

  getButtonClass(button: string): string[] {
    const classesToApply = [];
    if ((button === this.previousSelection) || (button === this.currentSelection)) {
      classesToApply.push('selected');

      if (this.error) {
        classesToApply.push('error');
      }
    }
    return classesToApply;
  }

  buttonTrackBy: TrackByFunction<string> = (index: number, button: string) => {
    return button;
  }
}
