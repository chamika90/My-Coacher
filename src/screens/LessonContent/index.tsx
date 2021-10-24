import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  getLessonStatus,
  updateLessonStatus,
} from '../../database/LessonStatusSchema';
import {LessonContent, FEEDBACK_TYPE} from '../../config/constants';
import {IContent} from '../../types/contentType';
import styles from './styles';
import Res from '../../resources';

const {Colors} = Res;

interface ImageContentProps {
  imageUri: string;
}

interface ArticleContentProps {
  articleContent: string;
}

interface VideoContentProps {
  videoContent: string;
}

const ImageContent: React.FC<ImageContentProps> = ({imageUri}) => {
  return (
    <Image
      style={styles.imageContainer}
      resizeMode={'contain'}
      source={{uri: imageUri}}
    />
  );
};

const ArticleContent: React.FC<ArticleContentProps> = ({articleContent}) => {
  return (
    <View style={styles.articleContainer}>
      <WebView source={{html: articleContent}} />
    </View>
  );
};

const VideoContent: React.FC<VideoContentProps> = ({videoContent}) => {
  return <Text>{videoContent}</Text>;
};

/*
 * Lesson Content Screen
 */
const LessonContentView = ({navigation, route}) => {
  const {id} = route.params;
  const [contentList, setContentList] = useState<IContent[]>([]);
  const [isEnd, setIsEndLesson] = useState(false);
  const [lessonStatus, setLessonStatus] = useState<object | undefined>(
    undefined,
  );
  const [currentLesson, setCurrentLesson] = useState<number>(0);

  useEffect(() => {
    setContentList(LessonContent[id]);
    const lessonStatusObj = getLessonStatus(id);
    setLessonStatus(lessonStatusObj);
    setCurrentLesson(lessonStatusObj.currentPosition);
  }, [id]);

  const getLessonContent = (item: IContent) => {
    switch (item.type) {
      case 'Image':
        return <ImageContent imageUri={item.data} />;
      case 'Article':
        return <ArticleContent articleContent={item.data} />;
      case 'Video':
        return <VideoContent videoContent={item.data} />;
    }
  };

  const handleContentChange = (index: number) => {
    if (index === contentList.length - 1) {
      setIsEndLesson(true);
    } else {
      setIsEndLesson(false);
    }
    const lessonObj = {
      lessonId: id,
      currentPosition: index,
      feedbackStatus: false,
    };

    updateLessonStatus(lessonObj);
  };

  const getFeedBack = (type: string) => {
    navigation.navigate('FeedBack', {
      id: id,
      type: type,
    });
  };

  return (
    <View style={styles.container}>
      <Swiper
        index={currentLesson}
        horizontal={true}
        showsButtons={false}
        showsPagination={false}
        loop={false}
        onIndexChanged={index => {
          handleContentChange(index);
        }}>
        {contentList.length > 0 &&
          contentList.map((item, index) => {
            return (
              <View key={index} style={styles.lessonContainer}>
                {getLessonContent(item)}
              </View>
            );
          })}
      </Swiper>
      {isEnd && (
        <View style={styles.footer}>
          <Text style={styles.footerDescription}>
            Please give us your feedback.
          </Text>
          <View style={styles.footerButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                getFeedBack(FEEDBACK_TYPE.AUDIO);
              }}>
              <Icon name={'microphone'} size={16} color={Colors.blueRibbon} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                getFeedBack(FEEDBACK_TYPE.TEXT);
              }}>
              <Icon name={'comment-dots'} size={16} color={Colors.blueRibbon} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default LessonContentView;
