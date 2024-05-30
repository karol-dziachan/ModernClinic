import React from 'react';
import { useFonts } from 'expo-font';


export default function GetFonts() {
  let [fontsLoaded] = useFonts({
    'Roboto-Black': require('../../../assets/fonts/Roboto-Black.ttf'),
    'Roboto-BlackItalic': require('../../../assets/fonts/Roboto-BlackItalic.ttf'),
    'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('../../../assets/fonts/Roboto-BoldItalic.ttf'),
    'Roboto-Italic': require('../../../assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('../../../assets/fonts/Roboto-Light.ttf'),
    'Roboto-LightItalic': require('../../../assets/fonts/Roboto-LightItalic.ttf'),
    'Roboto-Medium': require('../../../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('../../../assets/fonts/Roboto-MediumItalic.ttf'),
    'Roboto': require('../../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-ThinItalic': require('../../../assets/fonts/Roboto-ThinItalic.ttf'),
    'Roboto-Thin': require('../../../assets/fonts/Roboto-Thin.ttf'),
  });

  return fontsLoaded;
}
