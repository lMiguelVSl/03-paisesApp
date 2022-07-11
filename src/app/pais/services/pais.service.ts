import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private ApiUrl : string = 'https://restcountries.com/v2';

  constructor() { }
}
