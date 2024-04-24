import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import React from 'react';
import { colors } from 'src/constants/colors';
import { ingredientsData } from 'src/constants/ingredients.data';
import { Popular } from 'src/constants/populars.data';
import { NFeather, NFlatListIngredient, NImage, NMaterialCommunityIcons, NScrollView, NText, NTouchableWithoutFeedback, NView } from 'src/nativewinds.components';

type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export const DetailSceen = (props: HomeScreenNavigationProp) => {
	const pizza: Popular = props.route.params.pizza;

	return (
		<NScrollView className="flex-1 pt-5" showsVerticalScrollIndicator={false}>
			<NView className="flex-row justify-between items-center px-5 mt-8">
				<NTouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
					<NView className="w-10 h-10 border-2 border-textgray rounded-[10px] items-center justify-center">
						<NFeather name="chevron-left" size={16} className="text-text" />
					</NView>
				</NTouchableWithoutFeedback>

				<NTouchableWithoutFeedback>
					<NView className="w-10 h-10 border-2 border-primary rounded-[10px] items-center justify-center bg-primary">
						<NMaterialCommunityIcons name="star" size={16} className="text-white" />
					</NView>
				</NTouchableWithoutFeedback>
			</NView>

			<NText className="px-5 mt-4 w-56 font-bold text-[32px]">{pizza.title}</NText>

			<NText className="px-5 mt-4 font-bold text-[32px] text-[#E4723C]">$5.99</NText>

			<NView className="flex-row mt-6 items-start">
				<NView className="pl-5">
					<NText className="text-textgray2 text-sm">Size</NText>
					<NText className="text-text text-base font-semibold mb-3">Medium 14”</NText>

					<NText className="text-textgray2 text-sm">Crust</NText>
					<NText className="text-text text-base font-semibold mb-3">Thin Crust</NText>

					<NText className="text-textgray2 text-sm">Delivery in</NText>
					<NText className="text-text text-base font-semibold">30 min</NText>
				</NView>

				<NImage source={pizza.image} className="ml-auto -mr-14" />
			</NView>

			<NText className="text-base font-bold mb-3 mt-4 pl-5">Ingredients</NText>
			<NFlatListIngredient
				data={ingredientsData}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item, index }) => (
					<NView
						style={{
							shadowColor: colors.text,
							shadowOffset: {
								width: 0,
								height: 2
							},
							shadowOpacity: 0.23,
							shadowRadius: 2.62,
							elevation: 5
						}}
						className={`bg-white w-28 h-20 rounded-2xl items-center justify-center mb-5 mr-4${index === 0 ? ' ml-5' : ''}`}>
						<NImage source={item.image} />
					</NView>
				)}
			/>

			<NView className="px-5 mt-5">
				<NTouchableWithoutFeedback>
					<NView className="items-center justify-center flex-row bg-primary h-16 rounded-full">
						<NText className="font-bold text-sm mr-2">Place an order</NText>
						<NFeather name="chevron-right" size={14} className="text-text" />
					</NView>
				</NTouchableWithoutFeedback>
			</NView>

			<NView className="flex-1 mt-5 pb-5"></NView>
		</NScrollView>
	);
};
