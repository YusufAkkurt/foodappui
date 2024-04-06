import prizzaIcon from 'assets/images/pizza-icon.png';
import shrimpIcon from 'assets/images/shrimp-icon.png';
import sodaIcon from 'assets/images/soda-icon.png';

export interface Category {
	id: number;
	image: string;
	title: string;
	selected: boolean;
}

export const categoriesData: Category[] = [
	{ id: 1, image: prizzaIcon, title: 'Pizza', selected: true },
	{ id: 2, image: shrimpIcon, title: 'Seafood', selected: false },
	{ id: 3, image: sodaIcon, title: 'Soft Drinks', selected: false }
];
