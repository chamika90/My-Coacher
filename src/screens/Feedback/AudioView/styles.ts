import {StyleSheet} from 'react-native';
import Res from '../../../resources';

const {Colors} = Res;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1.5,
    flexDirection: 'row',
  },
  description: {
    flex: 0.5,
    textAlign: 'center',
    color: Colors.white,
  },
  button: {
    backgroundColor: Colors.fioletowyPurple,
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 10,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  record: {
    backgroundColor: Colors.tiffanyBlue,
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordOuterContainer: {
    backgroundColor: Colors.paleBlueLily,
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordOuterCircle: {
    backgroundColor: Colors.blizzardBlue,
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
