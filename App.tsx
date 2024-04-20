import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { colors } from 'src/constants/colors';
import { DetailSceen } from 'src/screens/detail';
import { HomeScreen } from 'src/screens/home';

export type RootStackParamList = {
	Home: undefined;
	Detail: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
				<Stack.Screen name="Detail" component={DetailSceen} options={{ headerShown: false }} />
			</Stack.Navigator>

			<StatusBar backgroundColor={colors.text} style={'light'} />
		</NavigationContainer>
	);
}
