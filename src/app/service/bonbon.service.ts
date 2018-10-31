import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonbonService {

  constructor() { }

  Bonbons = [

  /*Basiques*/
    { nom: 'Tictac', texture: 'dur', gout: 'doux', saveur: 'menthe',theme:'', image: 'https://static.openfoodfacts.org/images/products/80050124/front_fr.39.200.jpg' },
    { nom: 'La Vosgienne', texture: 'dur', gout: 'doux', saveur: 'menthe',theme:'', image: 'https://static.openfoodfacts.org/images/products/762/221/017/5458/front_fr.20.200.jpg' },
    { nom: 'Pastille Vichy', texture: 'dur', gout: 'doux', saveur: 'menthe',theme:'', image: 'https://static.openfoodfacts.org/images/products/353/828/005/5160/front_fr.7.200.jpg' },
    { nom: 'Dragolo', texture: 'mou', gout: 'doux', saveur: '',theme:'', image: 'https://static.openfoodfacts.org/images/products/310/322/002/2696/front_fr.16.200.jpg' },
/*HarryPotter*/
    { nom: 'Dragées surprises de Bertie Crochue', texture: 'dur', gout: 'doux', saveur: '',theme:'Harry Potter', image: 'https://static.openfoodfacts.org/images/products/007/156/799/8338/front_fr.29.200.jpg' },
    { nom: 'Sucette Platform 9 3/4', texture: 'dur', gout: 'doux', saveur: '',theme:'Harry Potter', image: 'https://static.openfoodfacts.org/images/products/040/000/255/0891/front_fr.4.200.jpg' },
    { nom: 'Chocogrenouilles', texture: 'dur', gout: 'doux', saveur: 'chocolat',theme:'Harry Potter', image: 'https://i1.wp.com/p0.storage.canalblog.com/03/77/1101193/99749009.jpg' },
/*Halloween*/
    { nom: 'Glotzer', texture: 'mou', gout: 'doux', saveur: '',theme:'Halloween', image: 'https://static.openfoodfacts.org/images/products/400/051/236/3729/front_fr.7.200.jpg' },
    { nom: 'Trolli Dracula', texture: 'mou', gout: 'doux', saveur: '',theme:'Halloween', image: 'https://static.openfoodfacts.org/images/products/400/051/236/4467/front_fr.8.200.jpg' },
    { nom: 'Spooky chocolate', texture: 'dur', gout: 'doux', saveur: 'chocolat',theme:'Halloween', image: 'https://static.openfoodfacts.org/images/products/202/397/369/9994/front_fr.4.200.jpg' },




  ];
}