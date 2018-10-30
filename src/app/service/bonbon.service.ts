import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonbonService {

  constructor() { }

  export const Bonbons: Bonbons[] = [
  /*Basiques*/
    { nom: 'Fraise tagada', texture: 'mou', gout: 'doux', saveur: 'fruit', theme:'', image: 'https://static.openfoodfacts.org/images/products/310/322/000/9079/front_fr.12.200.jpg' },
    { nom: 'Arlequin', texture: 'dur', gout: 'doux', saveur: '',theme:'', image: 'https://static.openfoodfacts.org/images/products/311/674/001/7332/front_fr.28.200.jpg' },
    { nom: 'Smarties', texture: 'dur', gout: 'doux', saveur: 'chocolat',theme:'', image: 'https://static.openfoodfacts.org/images/products/40345192/front_fr.45.200.jpg' },
    { nom: 'Têtes Brûlées', texture: 'dur', gout: 'acide', saveur: '',theme:'', image: 'https://static.openfoodfacts.org/images/products/10360634/front_fr.4.200.jpg' },
    { nom: 'Flexi-fizz', texture: 'mou', gout: 'acide', saveur: '',theme:'', image: 'https://static.openfoodfacts.org/images/products/541/005/718/7039/front_fr.6.200.jpg' },
    { nom: 'Surffizz', texture: 'mou', gout: 'acide', saveur: 'fruit',theme:'', image: 'https://static.openfoodfacts.org/images/products/311/674/003/2311/front_fr.7.200.jpg' },
    { nom: 'Chamallows', texture: 'mou', gout: 'doux', saveur: '',theme:'', image: 'https://static.openfoodfacts.org/images/products/310/322/000/9512/front_fr.37.200.jpg' },
    { nom: 'Dragibus', texture: 'dur', gout: 'doux', saveur: '',theme:'', image: 'https://static.openfoodfacts.org/images/products/310/322/002/5338/front_fr.29.200.jpg' },
    { nom: 'Bubblizz', texture: 'mou', gout: 'acide', saveur: '',theme:'', image: 'https://static.openfoodfacts.org/images/products/541/005/716/9110/front_fr.16.200.jpg' },
    { nom: 'Chupa chups', texture: 'dur', gout: 'doux', saveur: '',theme:'', image: 'https://static.openfoodfacts.org/images/products/541/005/716/9110/front_fr.16.200.jpg' },
    { nom: 'Werthers Original', texture: 'dur', gout: 'doux', saveur: 'caramel',theme:'', image: 'https://static.openfoodfacts.org/images/products/40144283/front_fr.36.200.jpg' },
    { nom: 'Schoko-Bons', texture: 'mou', gout: 'doux', saveur: 'chocolat',theme:'', image: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/23185_XXX_v1.tif&wid=650&cvt=jpeg' },
    { nom: 'Rotella', texture: 'mou', gout: 'doux', saveur: 'reglisse',theme:'', image: 'https://static.openfoodfacts.org/images/products/310/322/000/9635/front_fr.7.200.jpg' },
    { nom: 'Ferrero rocher', texture: 'dur', gout: 'doux', saveur: 'chocolat',theme:'', image: 'https://static.openfoodfacts.org/images/products/800/050/016/7113/front_fr.18.200.jpg' },
    { nom: 'Maltesers', texture: 'dur', gout: 'doux', saveur: 'chocolat',theme:'', image: 'https://static.openfoodfacts.org/images/products/500/015/941/7365/front_fr.7.200.jpg' },
    { nom: 'M&Ms', texture: 'dur', gout: 'doux', saveur: 'chocolat',theme:'', image: 'https://static.openfoodfacts.org/images/products/500/015/945/2595/front_fr.26.200.jpg' },
    { nom: 'Koala', texture: 'mou', gout: 'doux', saveur: 'chocolat',theme:'', image: 'https://static.openfoodfacts.org/images/products/311/674/001/1248/front_fr.8.200.jpg' },
    { nom: 'Daim', texture: 'dur', gout: 'doux', saveur: 'caramel',theme:'', image: 'https://static.openfoodfacts.org/images/products/762/221/030/3646/front_fr.8.200.jpg' },
    { nom: 'Carambar', texture: 'dur', gout: 'doux', saveur: 'caramel',theme:'', image: 'https://static.openfoodfacts.org/images/products/762/221/015/2619/front_fr.7.200.jpg' },
    { nom: 'Mi-cho-ko', texture: 'dur', gout: 'doux', saveur: 'caramel',theme:'', image: 'https://static.openfoodfacts.org/images/products/353/828/084/4511/front_fr.7.200.jpg' },
    { nom: 'Scoubidou', texture: 'mou', gout: 'doux', saveur: '',theme:'', image: 'https://static.openfoodfacts.org/images/products/311/674/002/7317/front_fr.6.200.jpg' },
    { nom: 'CARenSAC', texture: 'dur', gout: 'doux', saveur: 'reglisse',theme:'', image: 'https://static.openfoodfacts.org/images/products/310/322/003/0424/front_fr.9.200.jpg' },
    { nom: 'Cachou', texture: 'dur', gout: 'doux', saveur: 'reglisse',theme:'', image: 'https://static.openfoodfacts.org/images/products/310/698/000/2007/front_fr.5.200.jpg' },
    { nom: 'Skittles', texture: 'dur', gout: 'doux', saveur: 'fruits',theme:'', image: 'https://static.openfoodfacts.org/images/products/310/698/000/2007/front_fr.5.200.jpg' },
    { nom: 'Mentos', texture: 'dur', gout: 'doux', saveur: 'fruits',theme:'', image: 'https://static.openfoodfacts.org/images/products/87108675/front_fr.16.200.jpg' },
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

