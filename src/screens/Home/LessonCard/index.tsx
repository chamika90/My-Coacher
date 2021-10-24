import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {ILesson} from '../../../types/contentType';
import styles from './styles';

interface LessonCardProps {
  lesson: ILesson;
  onSelectItem: (lesson: ILesson) => void;
}

/*
 * Lesson Card Component
 */
const LessonCard: React.FC<LessonCardProps> = ({lesson, onSelectItem}) => {
  return (
    <TouchableOpacity
      style={styles.lessonContainer}
      onPress={() => onSelectItem(lesson)}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageIcon}
          resizeMode={'contain'}
          source={{
            uri: lesson.icon,
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {lesson.title}
        </Text>
        <Text style={styles.description}>{lesson.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LessonCard;
