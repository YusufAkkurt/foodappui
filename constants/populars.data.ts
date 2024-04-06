import pizza1 from 'assets/images/pizza1.png';
import pizza2 from 'assets/images/pizza2.png';
import pizza3 from 'assets/images/pizza3.png';

export interface Popular {
	id: number;
	image: string;
	title: string;
	weight: number;
	rating: number;
}

export const popularsData: Popular[] = [
	{ id: 1, image: pizza3, title: 'Pepperoni Pizza', weight: 700, rating: 5.0 },
	{ id: 2, image: pizza1, title: 'Primavera Pizza', weight: 540, rating: 4.5 },
	{ id: 3, image: pizza2, title: 'Vegetarian Pizza', weight: 450, rating: 4.0 }
];
