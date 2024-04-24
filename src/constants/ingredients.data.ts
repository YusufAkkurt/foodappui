import ingredient1 from 'assets/images/ham.png';
import ingredient2 from 'assets/images/tomato.png';
import ingredient3 from 'assets/images/garlic.png';
import ingredient4 from 'assets/images/cheese.png';
import { ImageSourcePropType } from 'react-native';

export interface Ingredient {
	id: number;
	image: ImageSourcePropType;
}

export const ingredientsData: Ingredient[] = [
	{ id: 1, image: ingredient1 },
	{ id: 2, image: ingredient2 },
	{ id: 3, image: ingredient3 },
	{ id: 4, image: ingredient4 },
];
