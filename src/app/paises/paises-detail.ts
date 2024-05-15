import { Paises } from './paises';

export class PaisesDetail extends Paises {

    constructor(
        id: number,
        name: string,
        formation_year: number,
        capital: string,
        description: string,
        flag: string
      ) {
        super(id, name, formation_year, capital, description, flag);
  }

}

