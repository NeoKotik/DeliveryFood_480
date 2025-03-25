import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Pizza',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
    text: 'This is the best pizza you can taste'
  },
  {
    id:'2',
    name: 'Meatball',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.5,
    imageUrl: 'assets/food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
    text: 'This is the best meatball you can taste'
  },
  {
    id:'3',
    name: 'Hamburger',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    tags: ['FastFood', 'Hamburger'],
    text: 'This is the best hamburger you can taste'
  },
  {
    id:'4',
    name: 'Fried',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.5,
    imageUrl: 'assets/food-4.jpg',
    tags: ['FastFood', 'Fry'],
    text: 'This is the best fried you can taste'
  },
  {
    id:'5',
    name: 'Soup',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3,
    imageUrl: 'assets/food-5.jpg',
    tags: ['SlowFood', 'Soup'],
    text: 'This is the best soup you can taste'
  },
  {
    id:'6',
    name: 'Pizza',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4,
    imageUrl: 'assets/food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
    text: 'This is the best vegetable pizza you can taste'
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 6, imageUrl: 'assets/food-all.jpg' },
  { name: 'FastFood', count: 4, imageUrl: 'assets/food-fastfood.jpg' },
  { name: 'Pizza', count: 2, imageUrl: 'assets/food-pizza.jpg' },
  { name: 'Lunch', count: 3, imageUrl: 'assets/food-lunch.jpg' },
  { name: 'SlowFood', count: 2, imageUrl: 'assets/food-slowFood.jpg' },
  { name: 'Hamburger', count: 1, imageUrl: 'assets/food-hamburger.jpg' },
  { name: 'Fry', count: 1, imageUrl: 'assets/food-fry.jpg' },
  { name: 'Soup', count: 1, imageUrl: 'assets/food-soup.jpg' },
]
