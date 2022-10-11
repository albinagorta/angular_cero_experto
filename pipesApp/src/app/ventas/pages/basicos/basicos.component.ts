import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'angel';
  nombreUpper: string = 'ANGEL';
  nombreCompleto: string = 'aNgeL aLbinagorta';

  fecha: Date = new Date(); // el día de hoy
  
  constructor() { }

  ngOnInit(): void {
  }

}
