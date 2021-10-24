import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'red',
    backgroundColor: colors.primaryCardBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  lessonContainer: {
    flex: 1,
  },
  imageContainer: {
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
    //position: 'absolute',
    //width: '100%',
    // height: 50,
    //backgroundColor: 'green',
    alignItems: 'center',
    bottom: 0,
    marginHorizontal: 10,
  },
  footerDescription: {
    // backgroundColor: 'yellow',
    flex: 5,
  },
  footerButtonContainer: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
    flex: 1,
  },
  finishButtonText: {
    color: colors.primaryButtonTextColor,
    fontSize: 16,
  },
});

export default styles;
