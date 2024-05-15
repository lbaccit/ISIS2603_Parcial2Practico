import { Component, OnInit } from '@angular/core';
import { Paises } from '../paises';


@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  paises: Array<Paises> = [];
  constructor() { }

  ngOnInit() {
  }

}
