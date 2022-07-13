import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {


  termino   : string = '';
  hayError  : boolean= false;
  Countries : Country[] = [];

  constructor( private paisService : PaisService ) { }

  buscar( termino : string ){

    this.hayError = false;
    this.termino  = termino;
    console.log( this.termino );

    this.paisService.buscarPais( this.termino )
    .subscribe( ( countries ) => 
      { 
        this.Countries = countries; 
      
      }, ( err ) => {
      
        this.hayError  = true;
        this.Countries = []
      
      });
     
  }

  
  
}
