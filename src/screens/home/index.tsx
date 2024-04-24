import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'App';
import profileImg from 'assets/images/profile.png';
import React from 'react';
import { categoriesData } from 'src/constants/categories.data';
import { colors } from 'src/constants/colors';
import { popularsData } from 'src/constants/populars.data';
import { NFeather, NFlatListCategory, NFlatListPopular, NImage, NMaterialCommunityIcons, NScrollView, NText, NTextInput, NTouchableWithoutFeedback, NView } from 'src/nativewinds.components';

type HomeScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: HomeScreenNavigationProp) => {
	return (
		<NScrollView className="flex-1 pt-5" showsVerticalScrollIndicator={false}>
			<NView className="flex-row justify-between items-center p-5 pt-8">
				<NImage source={profileImg} className="w-10 h-10 rounded-full" />
				<NFeather name="menu" size={26} className="text-text" />
			</NView>

			<NView className="px-5 pt-2">
				<NText className="text-text text-base">Food</NText>
				<NText className="text-text text-[32px] font-bold">Delivery</NText>
			</NView>

			<NView className="px-5 pt-4 pb-4 flex-row items-end gap-3">
				<NFeather name="search" size={20} className="text-text" />
				<NTextInput placeholder="Search..." placeholderTextColor={colors.textgray} cursorColor={colors.text} className="border-b-2 text-text font-semibold border-textgray flex-1" />
			</NView>

			<NView>
				<NText className="text-base font-bold pt-5 pl-5">Categories</NText>

				<NFlatListCategory
					data={categoriesData}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item, index }) => (
						<NTouchableWithoutFeedback onPress={() => navigation.navigate('Detail', { pizza: popularsData[0] })}>
							<NView
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
								className={`w-[105px] mr-5 mt-1 justify-evenly mb-5 items-center h-[177px] rounded-[20px]${index === 0 ? ' ml-5' : ''} ${item.selected ? 'bg-primary' : 'bg-white'}`}>
								<NImage source={item.image} className="w-[60px] h-[60px] object-contain" />

								<NText className="font-semibold">{item.title}</NText>

								<NView className={`w-[26px] h-[26px] rounded-full items-center justify-center ${item.selected ? 'bg-white' : 'bg-secondary'}`}>
									<NFeather name="chevron-right" size={16} className={item.selected ? 'text-text' : 'text-white'} />
								</NView>
							</NView>
						</NTouchableWithoutFeedback>
					)}
				/>
			</NView>

			<NView className="p-5">
				<NText className="text-base font-bold mb-3">Popular</NText>

				<NFlatListPopular
					data={popularsData}
					scrollEnabled={false}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<NTouchableWithoutFeedback onPress={() => navigation.navigate('Detail', { pizza: item })}>
							<NView key={item.id} style={{ display: 'flex' }} className="bg-white rounded-[25px] overflow-hidden mb-5">
								<NView className="flex-row gap-2 items-center p-5">
									<NMaterialCommunityIcons name="crown" size={16} className="text-primary" />
									<NText className="font-bold">top of the week</NText>
								</NView>

								<NView className="px-5">
									<NText className="font-semibold text-sm mb-1">{item.title}</NText>
									<NText className="font-medium text-textgray2 text-xs">Weight {item.weight} gr</NText>
								</NView>

								<NView className="flex-row gap-6 pt-3 items-center">
									<NView className="bg-primary w-[90px] h-[53px] rounded-bl-[25px] rounded-tr-[25px] items-center justify-center">
										<NFeather name="plus" size={16} className="text-text" />
									</NView>

									<NView className="flex-row items-center">
										<NMaterialCommunityIcons name="star" size={16} className="text-text" />
										<NText className="ml-1 font-semibold text-xs">{item.rating.toFixed(1)}</NText>
									</NView>
								</NView>

								<NImage source={item.image} className="absolute w-[210px] h-[105px] -right-9 top-[18%]" />
							</NView>
						</NTouchableWithoutFeedback>
					)}
				/>
			</NView>
		</NScrollView>
	);
};
