import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Platform, Alert} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {checkPermission} from '../../../helper/utils';
import {toBase64} from '../../../helper/utils';
import Res from '../../../resources';
import styles from './styles';

const {Colors} = Res;
const audioRecorderPlayer = new AudioRecorderPlayer();

interface AudioViewProps {
  id: number;
  addFeedBack: (feedBackObj: object) => void;
}

interface RecordTimerProps {
  time: string;
}

interface ControlButtonProps {
  iconName: string;
  onButtonPress: () => void;
}

const RecordTimer: React.FC<RecordTimerProps> = ({time}) => {
  return (
    <View style={styles.recordOuterContainer}>
      <View style={styles.recordOuterCircle}>
        <View style={styles.record}>
          <Text>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const ControlButton: React.FC<ControlButtonProps> = ({
  iconName,
  onButtonPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onButtonPress()}>
      <Icon name={iconName} size={16} color={Colors.white} />
    </TouchableOpacity>
  );
};

/*
 * AudioView Component
 */
const AudioView: React.FC<AudioViewProps> = ({id, addFeedBack}) => {
  const [recordTime, setRecordTime] = useState('');

  const addAudioFeedback = (base64Result: string | any) => {
    const feedBack = {
      lessonId: id,
      audioData: base64Result,
    };

    addFeedBack(feedBack);
  };

  const recordFeedBack = async () => {
    const result = await audioRecorderPlayer.startRecorder();

    audioRecorderPlayer.addRecordBackListener(e => {
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));

      return;
    });
    console.log(result);
  };

  const onStartRecord = async () => {
    if (Platform.OS === 'android') {
      if (await checkPermission()) {
        recordFeedBack();
      } else {
        console.log('Please grant permission');
      }
    } else {
      recordFeedBack();
    }
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    // setRecordSecs(0);
    audioRecorderPlayer.removeRecordBackListener();

    toBase64('sound.mp4', '/data/user/0/com.mycoacher/cache/sound.mp4').then(
      base64Result => {
        addAudioFeedback(base64Result);
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <RecordTimer time={recordTime} />
      </View>

      <Text style={styles.description}>Hit the record button to start!</Text>
      <View style={styles.buttonContainer}>
        <ControlButton
          iconName={'microphone'}
          onButtonPress={() => onStartRecord()}
        />

        <ControlButton
          iconName={'stop-circle'}
          onButtonPress={() => onStopRecord()}
        />
      </View>
    </View>
  );
};

export default AudioView;
