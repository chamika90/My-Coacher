import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.primaryBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  lessonContainer: {
    flex: 1,
  },
  imageContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {
    flex: 5,
    width: '100%',
  },
  articleContainer: {
    backgroundColor: colors.primaryCardBackgroundColor,
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    elevation: 10,
  },
  footer: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    bottom: 0,
    marginHorizontal: 10,
  },
  footerDescription: {
    fontSize: 16,
    color: colors.primaryDescriptionTextColor,
    flex: 5,
  },
  footerButtonContainer: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    flex: 1,
  },
  finishButtonText: {
    color: colors.primaryButtonTextColor,
    fontSize: 16,
  },
  loader: {
    position: 'absolute',
  },
});

export default styles;
