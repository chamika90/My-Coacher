import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {insertFeedbackInfo} from '../../../database/FeedbackSchema';
import {toBase64} from '../../../helper/utils';
import styles from './styles';
const audioRecorderPlayer = new AudioRecorderPlayer();

interface AudioViewProps {
  id: 'number';
}

/*
 * AudioView Component
 */
const AudioView: React.FC<AudioViewProps> = ({id}) => {
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    if (Platform.OS === 'android') {
      checkPermission();
    }
  }, []);

  const checkPermission = async () => {
    try {
      const grants = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);

      console.log('write external stroage', grants);

      if (
        grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Permissions granted');
      } else {
        console.log('All required permissions not granted');
        return;
      }
    } catch (err) {
      console.warn(err);
      return;
    }
  };

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();

    audioRecorderPlayer.addRecordBackListener(e => {
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));

      return;
    });
    console.log(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    setRecordSecs(0);
    audioRecorderPlayer.removeRecordBackListener();

    toBase64('sound.mp4', '/data/user/0/com.mycoacher/cache/sound.mp4').then(
      base64Result => {
        const feedBack = {
          id: new Date().getTime(),
          lessonId: id,
          data: base64Result,
        };

        insertFeedbackInfo(feedBack)
          .then(() => {
            console.log('insertFeedbackInfo success');
          })
          .catch(error => {
            console.log('insertFeedbackInfo error', error);
            // alert('some thing went wrong');
          });
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.recordOuterContainer}>
        <View style={styles.recordOuterCircle}>
          <View style={styles.record}>
            <Text>{recordTime}</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onStartRecord()}>
          <Icon name={'microphone'} size={16} color={'#000000'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onStopRecord()}>
          <Icon name={'stop-circle'} size={16} color={'#000000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AudioView;
