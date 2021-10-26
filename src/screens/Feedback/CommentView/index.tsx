import React, {useState} from 'react';
import {View, TextInput, Image} from 'react-native';

import Res from '../../../resources';
import CustomButton, {ButtonTypes} from '../../../components/CustomButton';
import styles from './styles';

interface CommentViewProps {
  id: 'number';
  addFeedBack: (feedBackObj: object) => void;
}

const {Images} = Res;

/*
 * CommentView
 */
const CommentView: React.FC<CommentViewProps> = ({id, addFeedBack}) => {
  const [isButtonDisabled, setButtonStatus] = useState(true);
  const [comment, setComment] = useState<string>('');

  const handleTextChange = (text: string) => {
    if (text.length > 0) {
      setButtonStatus(false);
    } else {
      setButtonStatus(true);
    }
    setComment(text);
  };

  const addComment = () => {
    const commentObj = {
      lessonId: id,
      commentData: comment,
    };

    addFeedBack(commentObj);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Images.feedback_img} style={styles.feedbackImage} />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput
            placeholder={'Enter your comment here'}
            multiline={true}
            onChangeText={text => {
              handleTextChange(text);
            }}
          />
        </View>
        <View style={styles.submitButtonContainer}>
          <View style={styles.submitButton}>
            <CustomButton
              isButtonDisabled={isButtonDisabled}
              buttonType={ButtonTypes.primary}
              title={'Submit'}
              onButtonPress={() => {
                addComment();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CommentView;
