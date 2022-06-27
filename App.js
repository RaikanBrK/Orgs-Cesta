import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Cesta from './src/views/Cesta';

import mosk from './src/mocks/cesta';

import { 
  useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold 
} from "@expo-google-fonts/montserrat";

import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta {...mosk} />
    </SafeAreaView>
  );
}