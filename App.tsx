import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { store, persistor } from './src/stores';
import Fonts, {
  bold,
  semiBold,
  medium,
  regular,
} from './src/theme/fonts';
import AppContainer from './src/navigators/AppContainer';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const onLayoutRootView = useCallback(async () => {
    if (isLoading) {
      await SplashScreen.hideAsync();
    }
  }, [isLoading]);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          [Fonts.Regular]: regular,
          [Fonts.Medium]: medium,
          [Fonts.SemiBold]: semiBold,
          [Fonts.Bold]: bold,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    prepare();
  }, []);

  useEffect(() => {
    onLayoutRootView();
  }, [isLoading, onLayoutRootView]);

  if (isLoading) return null;

  return (
    <Provider
      store={store}
    >
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}
