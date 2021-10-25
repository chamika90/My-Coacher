import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBackgroundColor,
  },
  titleContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.primaryButtonDisabledColor,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
  },
  message: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  button: {
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: colors.secondaryButtonTextColor,
  },
});

export default styles;
