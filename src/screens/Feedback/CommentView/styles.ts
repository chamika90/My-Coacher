import {StyleSheet} from 'react-native';
import {theme} from '../../../config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    flexDirection: 'column',
    margin: 10,
    backgroundColor: colors.primaryBackgroundColor,
    elevation: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
  },
  feedbackImage: {
    width: 300,
    height: 200,
  },
  inputContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 2,
    top: 0,
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 10,
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
