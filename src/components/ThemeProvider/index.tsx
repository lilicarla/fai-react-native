/* eslint-disable react/style-prop-object */
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme from '../../styles/theme';

interface ThemeProviderViewProps {
  children: React.ReactNode;
}

export default function ThemeProviderView({ children } : ThemeProviderViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <ThemeProvider theme={theme}>
      <View style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: `${theme.colors.background}`,
      }}
      >
        <StatusBar
          style="dark"
          backgroundColor={theme.colors.background}
        />
        {children}
      </View>
    </ThemeProvider>
  );
}
