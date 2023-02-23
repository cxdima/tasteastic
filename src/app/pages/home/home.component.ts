import { Component } from '@angular/core';
import { Recipe } from '../../components/recipe-card/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products = productsList;
}

export const productsList: Array<Recipe> = [
  {
    id: 1,
    rating: 11724,
    image: '/assets/carbonara.webp',
    name: 'Spaghetti Carbonara',
    time: 30,
    difficulty: 'Easy',
    breakfast: false,
  },
  {
    id: 2,
    rating: 41983,
    image: '/assets/steak.webp',
    name: 'Gochujang Skirt Steak',
    time: 40,
    difficulty: 'Hard',
    breakfast: false,
  },
  {
    id: 3,
    rating: 23423,
    image: '/assets/muffins.webp',
    name: 'Muffins',
    time: 20,
    difficulty: 'Medium',
    breakfast: true,
  },
  {
    id: 4,
    rating: 51293,
    image: '/assets/smoothie.jpeg',
    name: 'Berry Smoothie',
    time: 10,
    difficulty: 'easy',
    breakfast: true,
  },
  {
    id: 5,
    rating: 23475,
    image: '/assets/omelet.webp',
    name: 'Classic Folded Omelet',
    time: 15,
    difficulty: 'easy',
    breakfast: true,
  },
  {
    id: 6,
    rating: 50329,
    image: '/assets/pancakes.jpeg',
    name: 'Easy Pancakes',
    time: 20,
    difficulty: 'Medium',
    breakfast: true,
  },
  {
    id: 7,
    rating: 12935,
    image: '/assets/pizza.jpeg',
    name: 'Pizza Salami',
    time: 25,
    difficulty: 'Medium',
    breakfast: false,
  },
  {
    id: 8,
    rating: 23485,
    image: '/assets/chicken.webp',
    name: 'Baked Chicken',
    time: 40,
    difficulty: 'hard',
    breakfast: false,
  },
];
