import {StyleSheet} from 'react-native';
import {theme} from '../../../config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  lessonContainer: {
    flexDirection: 'row',
    margin: 5,
    borderRadius: 10,
    backgroundColor: colors.primaryCardBackgroundColor,
    elevation: 10,
  },
  imageContainer: {
    flex: 2,
  },
  imageIcon: {height: 80, padding: 20},
  infoContainer: {
    margin: 5,
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.primaryTextColor,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    color: colors.primaryTextColor,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default styles;
