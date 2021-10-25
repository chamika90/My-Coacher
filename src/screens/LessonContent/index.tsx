import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome5';
import VideoPlayer from 'react-native-video-player';

import {
  getLessonStatus,
  updateLessonStatus,
  checkFeedBackAvailability,
} from '../../database/ConfigSchemas';
import {
  LessonContent,
  FEEDBACK_TYPE,
  NAVIGATION_SCREENS,
} from '../../config/constants';
import {IContent} from '../../types/contentType';
import styles from './styles';
import {theme} from '../../config/theme';

const {colors} = theme;

interface ImageContentProps {
  imageUri: string;
}

interface ArticleContentProps {
  articleContent: string;
}

interface VideoContentProps {
  videoContent: string;
}

interface FeedbackButtonProps {
  iconName: string;
  onButtonPress: () => void;
}

const ImageContent: React.FC<ImageContentProps> = ({imageUri}) => {
  const [isLoading, setLoadingState] = useState(false);
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={{uri: imageUri}}
        onLoadStart={() => {
          setLoadingState(true);
        }}
        onLoadEnd={() => {
          setLoadingState(false);
        }}
      />
      <ActivityIndicator
        style={styles.loader}
        animating={isLoading}
        size={50}
        color={colors.primaryLoaderColor}
      />
    </View>
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
  return (
    <View style={styles.articleContainer}>
      <VideoPlayer
        video={{
          uri: videoContent,
        }}
        videoWidth={1600}
        videoHeight={900}
      />
    </View>
  );
};

const FeedbackButton: React.FC<FeedbackButtonProps> = ({
  iconName,
  onButtonPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onButtonPress();
      }}>
      <Icon name={iconName} size={20} color={colors.primaryButtonIconColor} />
    </TouchableOpacity>
  );
};

/*
 * Lesson Content Screen
 */
const LessonContentView = ({navigation, route}: any) => {
  const {id} = route.params;
  const [contentList, setContentList] = useState<IContent[]>([]);
  const [isEnd, setIsEndLesson] = useState(false);

  const [currentLesson, setCurrentLesson] = useState<number>(0);
  const [isFeedbackAvailable, setFeedbackAvailability] = useState(false);

  useEffect(() => {
    setContentList(LessonContent[id]);
    const lessonStatusObj = getLessonStatus(id);
    setCurrentLesson(lessonStatusObj.currentPosition);
    const feedBackStatus = checkFeedBackAvailability(id);
    setFeedbackAvailability(feedBackStatus);
    if (lessonStatusObj.currentPosition === contentList.length - 1) {
      setIsEndLesson(true);
    }
  }, [id, contentList]);

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
    navigation.navigate(NAVIGATION_SCREENS.FEEDBACK, {
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
      {isEnd && !isFeedbackAvailable && (
        <View style={styles.footer}>
          <Text style={styles.footerDescription}>
            Please give us your feedback.
          </Text>
          <View style={styles.footerButtonContainer}>
            <FeedbackButton
              iconName={'microphone'}
              onButtonPress={() => {
                getFeedBack(FEEDBACK_TYPE.AUDIO);
              }}
            />

            <FeedbackButton
              iconName={'comment-dots'}
              onButtonPress={() => {
                getFeedBack(FEEDBACK_TYPE.TEXT);
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default LessonContentView;
