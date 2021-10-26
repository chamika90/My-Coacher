import {StyleSheet} from 'react-native';
import {theme} from '../../../config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    flexDirection: 'column',
    margin: 1,
    backgroundColor: colors.primaryBackgroundColor,
    elevation: 5,
  },
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 3,
  },
  feedbackImage: {
    width: '100%',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondaryBackgroundColor,
    position: 'absolute',
    bottom: 0,
    height: '75%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  input: {
    top: 0,
    width: '90%',
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: 10,
    borderColor: colors.primaryBorderColor,
    backgroundColor: colors.secondaryBackgroundColor,
  },
  submitButtonContainer: {
    flex: 0.5,
    bottom: 0,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  submitButton: {
    bottom: 0,
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
