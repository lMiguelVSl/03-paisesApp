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

  @ViewChild('inputPais') inputPais !: ElementRef<HTMLInputElement>;

  termino   : string = '';
  hayError  : boolean= false;
  Countries : Country[] = [];

  constructor( private paisService : PaisService ) { }

  buscar(){

    this.hayError = false;

    console.log( this.termino );

    this.paisService.buscarPais( this.termino )
    .subscribe( ( countries ) => 
      {
        console.log( countries ); 
        this.Countries = countries; 
      
      }, ( err ) => {
      
        this.hayError  = true;
        this.Countries = []
      
      });

      this.inputPais.nativeElement.value = '';
  }

  
  
}
