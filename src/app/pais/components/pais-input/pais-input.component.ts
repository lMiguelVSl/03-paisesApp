import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {

  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @ViewChild('inputPais') inputPais !: ElementRef<HTMLInputElement>;

  termino : string = '';

  constructor() { }

  buscar() {
    this.onEnter.emit( this.termino );
    this.inputPais.nativeElement.value = '';
  }
}
