import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';
import { PaisesDetail } from '../paises-detail';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  paises: Array<PaisesDetail> = [];
  selected: boolean = false;
  selectedPais!: PaisesDetail;
  constructor(private paisesService: PaisesService) { }

  getPaises(): void {
    this.paisesService.getPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  onSelected(pais: PaisesDetail): void {
    this.selected = true;
    this.selectedPais = pais;
  }

  ngOnInit() {
    this.getPaises();
  }

}

