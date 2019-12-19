import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

export default StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: 'white',
    fontSize: 32,
    marginBottom: 20,
  },
});
