import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  country !: Country;

  constructor( 
    private activatedRoute : ActivatedRoute,
    private paisService    : PaisService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getCountryByCode( id ) ),
      tap( console.log )
    )
    .subscribe( country => this.country = country);

/*     this.activatedRoute.params
    .subscribe( ({id}) => {
      console.log( id );

      this.paisService.getCountryByCode( id )  
      .subscribe( pais => {
        console.log( pais )
      } )
    } ) */
  }

}
