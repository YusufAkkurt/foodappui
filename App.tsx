import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Platform, StatusBar as NativeStatusBar, Text } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? NativeStatusBar.currentHeight : 0 }}>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
