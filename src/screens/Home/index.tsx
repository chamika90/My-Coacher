import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import {
  getLessonStatus,
  insertLessonStatusInfo,
} from '../../database/ConfigSchemas';
import {Lessons, NAVIGATION_SCREENS} from '../../config/constants';
import {ILesson} from '../../types/contentType';
import styles from './styles';

import LessonCard from './LessonCard';

/*
 * Home Screen
 */
const Home = ({navigation}: any) => {
  const [lessonsList, setLessonsList] = useState<ILesson[]>([]);
  useEffect(() => {
    setLessonsList(Lessons);
  }, []);

  const onSelectLesson = (lesson: ILesson) => {
    const lessonObj = getLessonStatus(lesson.id);
    if (!lessonObj) {
      const lessonStatus = {
        lessonId: lesson.id,
        currentPosition: 0,
        feedbackStatus: false,
      };

      insertLessonStatusInfo(lessonStatus)
        .then(() => {
          navigateToLessonContent(lesson);
        })
        .catch(error => {});
    }
    navigateToLessonContent(lesson);
  };

  const navigateToLessonContent = (lesson: ILesson) => {
    navigation.navigate(NAVIGATION_SCREENS.LESSON_CONTENT, {
      id: lesson.id,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lessonsList}
        renderItem={({item, index}) => {
          return (
            <LessonCard
              lesson={item}
              onSelectItem={lessonObj => onSelectLesson(lessonObj)}
              key={index}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
