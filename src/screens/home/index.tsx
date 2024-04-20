import profileImg from 'assets/images/profile.png';
import React from 'react';
import { categoriesData } from 'src/constants/categories.data';
import { colors } from 'src/constants/colors';
import { popularsData } from 'src/constants/populars.data';
import { StyledFeather, StyledImage, StyledMaterialCommunityIcons, StyledSafeAreaView, StyledScrollView, StyledText, StyledTextInput, StyledView } from 'src/nativewinds.components';

export const HomeScreen = () => {
	return (
		<StyledScrollView className="flex-1 pt-5" showsVerticalScrollIndicator={false}>
			<StyledView className="flex-row justify-between items-center p-5 pt-8">
				<StyledImage source={profileImg} className="w-10 h-10 rounded-full" />
				<StyledFeather name="menu" size={26} className="text-text" />
			</StyledView>

			<StyledView className="px-5 pt-2">
				<StyledText className="text-text text-base">Food</StyledText>
				<StyledText className="text-text text-[32px] font-bold">Delivery</StyledText>
			</StyledView>

			<StyledView className="px-5 pt-4 pb-4 flex-row items-end gap-3">
				<StyledFeather name="search" size={20} className="text-text" />
				<StyledTextInput placeholder="Search..." placeholderTextColor={colors.textgray} cursorColor={colors.text} className="border-b-2 text-text font-semibold border-textgray flex-1" />
			</StyledView>

			<StyledView>
				<StyledText className="text-base font-bold pt-5 pl-5">Categories</StyledText>

				<StyledScrollView className="flex-row pt-3" horizontal showsHorizontalScrollIndicator={false}>
					{categoriesData.map((_category, index) => (
						<StyledView
							key={_category.id}
							style={{
								shadowColor: colors.text,
								shadowOffset: {
									width: 0,
									height: 2
								},
								shadowOpacity: 0.23,
								shadowRadius: 2.62,
								elevation: 10
							}}
							className={`w-[105px] mr-5 mt-1 justify-evenly mb-5 items-center h-[177px] rounded-[20px]${index === 0 ? ' ml-5' : ''} ${_category.selected ? 'bg-primary' : 'bg-white'}`}>
							<StyledImage source={_category.image} className="w-[60px] h-[60px] object-contain" />

							<StyledText className="font-semibold">{_category.title}</StyledText>

							<StyledView className={`w-[26px] h-[26px] rounded-full items-center justify-center ${_category.selected ? 'bg-white' : 'bg-secondary'}`}>
								<StyledFeather name="chevron-right" size={16} className={_category.selected ? 'text-text' : 'text-white'} />
							</StyledView>
						</StyledView>
					))}
				</StyledScrollView>
			</StyledView>

			<StyledView className="p-5">
				<StyledText className="text-base font-bold">Popular</StyledText>

				<StyledView className="gap-5 pt-3 pb-5">
					{popularsData.map((_popular) => (
						<StyledView key={_popular.id} className="bg-white rounded-[25px] overflow-hidden">
							<StyledView className="flex-row gap-2 items-center p-5">
								<StyledMaterialCommunityIcons name="crown" size={16} className="text-primary" />
								<StyledText className="font-bold">top of the week</StyledText>
							</StyledView>

							<StyledView className="px-5">
								<StyledText className="font-semibold text-sm mb-1">{_popular.title}</StyledText>
								<StyledText className="font-medium text-textgray2 text-xs">Weight {_popular.weight} gr</StyledText>
							</StyledView>

							<StyledView className="flex-row gap-6 pt-3 items-center">
								<StyledView className="bg-primary w-[90px] h-[53px] rounded-bl-[25px] rounded-tr-[25px] items-center justify-center">
									<StyledFeather name="plus" size={16} className="text-text" />
								</StyledView>

								<StyledView className="flex-row items-center">
									<StyledMaterialCommunityIcons name="star" size={16} className="text-text" />
									<StyledText className="ml-1 font-semibold text-xs">{_popular.rating.toFixed(1)}</StyledText>
								</StyledView>
							</StyledView>

							<StyledImage source={_popular.image} className="absolute w-[210px] h-[105px] -right-9 top-[18%]" />
						</StyledView>
					))}
				</StyledView>
			</StyledView>
		</StyledScrollView>
	);
};
