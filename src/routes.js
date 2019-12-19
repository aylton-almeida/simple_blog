import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BlogListScreen, {
  navigationOptions as blogListOptions,
} from './screens/BlogListScreen';
import PostScreen, {
  navigationOptions as postListOptions,
} from './screens/PostScreen';
import SplashScreen from './screens/SplashScreen';
import {theme} from './styles/theme';

const BlogNavigator = createStackNavigator(
  {
    blog: {screen: BlogListScreen, navigationOptions: blogListOptions},
    post: {screen: PostScreen, navigationOptions: postListOptions},
  },
  {
    initialRouteName: 'blog',
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    splash: SplashScreen,
    blog: BlogNavigator,
  },
  {
    initialRouteName: 'splash',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
