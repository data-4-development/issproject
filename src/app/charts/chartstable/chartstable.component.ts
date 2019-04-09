import { Component, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Bizerte',
    flag: '',
    area: 17075200,
    population: 1250368
  },
  {
    name: 'Tunis',
    flag: 'c/cf/Flag_of_Tunisia.svg',
    area: 9976140,
    population: 850214
  },
  {
    name: 'Nabeul',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 795201
  },
  {
    name: 'Ben arous',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 200585
  }
];

function search(text: string, pipe: PipeTransform): Country[] {
  return COUNTRIES.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.area).includes(term)
        || pipe.transform(country.population).includes(term);
  });
}

@Component({
  selector: 'app-chartstable',
  templateUrl: './chartstable.component.html',
  styleUrls: ['./chartstable.component.css'],
  providers: [DecimalPipe]

})
export class ChartstableComponent {
  countries$: Observable<Country[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

}
