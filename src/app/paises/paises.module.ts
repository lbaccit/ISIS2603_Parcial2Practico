import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesComponent } from './paises.component';
import { PaisesListComponent } from './paises-list/paises-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PaisesListComponent],
  declarations: [PaisesListComponent],
  
})
export class PaisesModule { }
