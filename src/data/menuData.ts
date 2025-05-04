import { MenuItem } from '../types/MenuItem';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'カルボナーラ',
    description: '伝統的なローマのレシピ。グアンチャーレと卵、ペコリーノチーズの濃厚な味わい。',
    price: 1680,
    img: '/menu/carbonara.jpg',
    categories: ['classic']
  },
  {
    id: '2',
    name: 'ペスカトーレ',
    description: '新鮮な海の幸をふんだんに使ったトマトベースのパスタ。海の香りが広がります。',
    price: 1980,
    img: '/menu/pescatore.jpg',
    categories: ['seafood']
  },
  {
    id: '3',
    name: 'アラビアータ',
    description: '唐辛子の効いた辛口トマトソース。シンプルながらもパンチの効いた一品。',
    price: 1580,
    img: '/menu/arrabbiata.jpg',
    categories: ['spicy', 'classic']
  },
  {
    id: '4',
    name: '海老のアーリオオーリオ',
    description: 'にんにくとオリーブオイルの風味に大ぶりのエビがアクセント。',
    price: 1780,
    img: '/menu/aglio-olio-shrimp.jpg',
    categories: ['seafood']
  },
  {
    id: '5',
    name: 'ボロネーゼ',
    description: '牛挽肉の旨味がぎっしり詰まった伝統的なミートソース。',
    price: 1680,
    img: '/menu/bolognese.jpg',
    categories: ['classic']
  },
  {
    id: '6',
    name: '魚介のペペロンチーノ',
    description: '新鮮な魚介の旨味と唐辛子の辛さが絶妙なバランス。',
    price: 1880,
    img: '/menu/seafood-peperoncino.jpg',
    categories: ['seafood', 'spicy']
  }
];
