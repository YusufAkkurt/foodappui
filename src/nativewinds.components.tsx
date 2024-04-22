import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { styled } from 'nativewind';
import { SafeAreaView, View, Text, Image, TextInput, ScrollView, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Category } from './constants/categories.data';
import { Popular } from './constants/populars.data';

export const NSafeAreaView = styled(SafeAreaView);
export const NView = styled(View);
export const NText = styled(Text);
export const NImage = styled(Image);
export const NFeather = styled(Feather);
export const NMaterialCommunityIcons = styled(MaterialCommunityIcons);
export const NTextInput = styled(TextInput);
export const NScrollView = styled(ScrollView);
export const NFlatListCategory = styled(FlatList<Category>);
export const NFlatListPopular = styled(FlatList<Popular>);
export const NTouchableWithoutFeedback = styled(TouchableWithoutFeedback);
