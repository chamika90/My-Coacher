import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import AudioView from './AudioView';
import CommentView from './CommentView';
import {FEEDBACK_TYPE, NAVIGATION_SCREENS} from '../../config/constants';
import {insertFeedbackInfo} from '../../database/ConfigSchemas';
import AlertPopup from '../../components/AlertPopup';
import {theme} from '../../config/theme';

const {colors} = theme;

/*
 * Feedback Screen
 */
const FeedbackView = ({route}: any) => {
  const {id, type} = route.params;
  const navigation = useNavigation();

  const [isAlertDisplay, setAlertDisplayStatus] = useState(false);
  const [alertDialog, setAlertDialogInfo] = useState({
    icon: '',
    iconTint: '',
    title: '',
    message: '',
    cancelButtonText: '',
    confirmButtonText: '',
  });

  const toggleAlertPopup = () => {
    setAlertDisplayStatus(prevState => !prevState);
  };

  const finishFeedBack = () => {
    toggleAlertPopup();
    navigation.reset({
      index: 0,
      routes: [{name: NAVIGATION_SCREENS.HOME}],
    });
  };

  const addFeedback = (feedback: object) => {
    insertFeedbackInfo(feedback)
      .then(() => {
        setAlertDialogInfo({
          icon: 'check-circle',
          iconTint: colors.success,
          title: 'Success',
          message: 'Your Feedback successfully saved',
          cancelButtonText: '',
          confirmButtonText: 'Ok',
        });
        toggleAlertPopup();
        console.log('insertFeedbackInfo success');
      })
      .catch(error => {
        setAlertDialogInfo({
          icon: 'exclamation-circle',
          iconTint: colors.error,
          title: 'Error',
          message: 'Something went wrong',
          cancelButtonText: '',
          confirmButtonText: 'Ok',
        });
        toggleAlertPopup();
        console.log('insertFeedbackInfo error', error);
      });
  };

  const getContentByType = () => {
    switch (type) {
      case FEEDBACK_TYPE.AUDIO:
        return (
          <AudioView
            id={id}
            addFeedBack={feedBackObj => {
              addFeedback(feedBackObj);
            }}
          />
        );

      case FEEDBACK_TYPE.TEXT:
        return (
          <CommentView
            id={id}
            addFeedBack={feedBackObj => {
              addFeedback(feedBackObj);
            }}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      {getContentByType()}
      <AlertPopup
        icon={alertDialog.icon}
        iconTint={alertDialog.iconTint}
        visible={isAlertDisplay}
        title={alertDialog.title}
        message={alertDialog.message}
        cancelButtonText={alertDialog.cancelButtonText}
        confirmButtonText={alertDialog.confirmButtonText}
        cancelOnPress={() => finishFeedBack()}
        confirmOnPress={() => finishFeedBack()}
      />
    </View>
  );
};

export default FeedbackView;
