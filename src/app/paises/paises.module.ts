import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { PaisesDetailComponent } from './paises-detail/paises-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PaisesListComponent,PaisesDetailComponent],
  declarations: [PaisesListComponent,PaisesDetailComponent],
  
})
export class PaisesModule { }
