import { Component } from '@angular/core';


import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino   : string = '';
  hayError  : boolean= false;
  Countries : Country[] = [];


  constructor( private capitalService : PaisService) {
    
  }

  buscar( termino : string ){

    this.hayError = false;
    this.termino  = termino;
    console.log( this.termino );

    this.capitalService.buscarCapital( this.termino )
    .subscribe( ( countries ) => 
      { 
        this.Countries = countries; 
      
      }, ( err ) => {
      
        this.hayError  = true;
        this.Countries = []
      
      });
     
  }

  sugges(){

  }

}
