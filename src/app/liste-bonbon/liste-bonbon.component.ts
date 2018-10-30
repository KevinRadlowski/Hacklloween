import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-bonbon',
  templateUrl: './liste-bonbon.component.html',
  styleUrls: ['./liste-bonbon.component.css']
})
export class ListeBonbonComponent implements OnInit {

  constructor() {

    export const Bonbons: Bonbon[] = [
      { nom: 'Fraise tagada', marque: 'Haribo', texture: 'mou', gout: 'doux', image: 'https://static.openfoodfacts.org/images/products/310/322/000/9079/front_fr.12.200.jpg' },
      { nom: 'Arlequin', marque: 'Lutti', texture: 'dur', gout: 'doux', image: 'https://static.openfoodfacts.org/images/products/311/674/001/7332/front_fr.28.200.jpg' },
      { nom: 'Smarties', marque: 'Nestlé', texture: 'dur', gout: 'doux', saveur: 'chocolat', image: 'https://static.openfoodfacts.org/images/products/40345192/front_fr.45.200.jpg' },
      { nom: 'Têtes Brûlées', marque: 'Verquin', texture: 'dur', gout: 'acide', image: 'https://static.openfoodfacts.org/images/products/10360634/front_fr.4.200.jpg' },
      { nom: 'Flexi-fizz', marque: 'Lutti', texture: 'mou', gout: 'acide', image: 'https://static.openfoodfacts.org/images/products/541/005/718/7039/front_fr.6.200.jpg' },
      { nom: 'Surffizz', marque: 'Lutti', texture: 'mou', gout: 'acide', image: 'https://static.openfoodfacts.org/images/products/311/674/003/3608/front_fr.4.200.jpg' },
      { nom: 'Chamallows', marque: 'Haribo', texture: 'mou', gout: 'doux', image: 'https://static.openfoodfacts.org/images/products/310/322/000/9512/front_fr.37.200.jpg' },
      { nom: 'Dragibus', marque: 'Haribo', texture: 'dur', gout: 'doux', image: 'https://static.openfoodfacts.org/images/products/310/322/002/5338/front_fr.29.200.jpg' },
      { nom: 'Bubblizz', marque: 'Lutti', texture: 'mou', gout: 'acide', image: 'https://static.openfoodfacts.org/images/products/541/005/716/9110/front_fr.16.200.jpg' },
      { nom: 'Chupa chups', marque: 'Chupa chups', texture: 'dur', gout: 'doux', image: 'https://static.openfoodfacts.org/images/products/541/005/716/9110/front_fr.16.200.jpg' },
      { nom: 'Werthers Original', marque: 'Werthers', texture: 'dur', gout: 'doux', saveur: 'caramel', image: 'https://static.openfoodfacts.org/images/products/40144283/front_fr.36.200.jpg' },
      { nom: 'Schoko-Bons', marque: 'Kinder', texture: 'mou', gout: 'doux', saveur: 'chocolat', image: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/23185_XXX_v1.tif&wid=650&cvt=jpeg' },
      { nom: 'Rotella', marque: 'Haribo', texture: 'mou', gout: 'doux', saveur: 'reglisse', image: 'https://static.openfoodfacts.org/images/products/310/322/000/9635/front_fr.7.200.jpg' },
      { nom: 'Ferrero rocher', marque: 'Ferrero', texture: 'dur', gout: 'doux', saveur: 'chocolat', image: 'https://static.openfoodfacts.org/images/products/800/050/016/7113/front_fr.18.200.jpg' },
      { nom: 'Maltesers', marque: 'Maltesers', texture: 'dur', gout: 'doux', saveur: 'chocolat', image: 'https://static.openfoodfacts.org/images/products/500/015/941/7365/front_fr.7.200.jpg' },
      { nom: 'M&Ms', marque: 'M&Ms', texture: 'dur', gout: 'doux', saveur: 'chocolat', image: 'https://static.openfoodfacts.org/images/products/500/015/945/2595/front_fr.26.200.jpg' },
      { nom: 'Koala', marque: 'Lutti', texture: 'mou', gout: 'doux', saveur: 'chocolat', image: 'https://static.openfoodfacts.org/images/products/311/674/001/1248/front_fr.8.200.jpg' },




    ];
  }

  ngOnInit() {
  }

}
