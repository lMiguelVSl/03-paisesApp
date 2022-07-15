import { Component, ElementRef, EventEmitter, Output, ViewChild, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  @Input()  placeHolder: string = '';
  @ViewChild('inputPais') inputPais !: ElementRef<HTMLInputElement>;

  debouncer : Subject<string> = new Subject();

  termino : string = '';

  constructor() { }

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(1000))
    .subscribe( value => {
      this.onDebounce.emit( value );
    });
  }

  buscar() {
    this.onEnter.emit( this.termino );
    this.inputPais.nativeElement.value = '';
  }

  letterPress( ){
    this.debouncer.next( this.termino );
  }
}
