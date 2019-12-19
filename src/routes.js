import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BlogScreen from './screens/BlogScreen';
import PostScreen from './screens/PostScreen';
import SplashScreen, {
  navigationOptions as splashOptions,
} from './screens/SplashScreen';

const AppNavigator = createStackNavigator(
  {
    splash: {screen: SplashScreen, navigationOptions: splashOptions},
    blog: BlogScreen,
    post: PostScreen,
  },
  {
    initialRouteName: 'splash',
  },
);

export default createAppContainer(AppNavigator);
