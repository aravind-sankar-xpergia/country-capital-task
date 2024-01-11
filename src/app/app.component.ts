import { Component } from '@angular/core';
import { DATA } from 'src/data/country-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CountryCapitalTask';
  data = DATA;
}
