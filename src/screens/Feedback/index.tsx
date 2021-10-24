import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import AudioView from './AudioView';
import CommentView from './CommentView';
import {FEEDBACK_TYPE} from '../../config/constants';

/*
 * Feedback Screen
 */
const FeedbackView = ({route}) => {
  const {id, type} = route.params;

  const getContentByType = () => {
    switch (type) {
      case FEEDBACK_TYPE.AUDIO:
        return <AudioView id={id} />;

      case FEEDBACK_TYPE.TEXT:
        return <CommentView id={id} />;
    }
  };

  return <View style={styles.container}>{getContentByType()}</View>;
};

export default FeedbackView;
