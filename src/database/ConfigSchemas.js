import Realm from 'realm';

const FeedBackSchema = {
  name: 'FeedBack',
  properties: {
    lessonId: 'int',
    audioData: 'string?',
    commentData: 'string?',
  },
};
const LessonStatusSchema = {
  name: 'LessonStatus',
  properties: {
    lessonId: 'int',
    currentPosition: 'int',
    feedbackStatus: 'bool',
  },
};

let realm = new Realm({schema: [FeedBackSchema, LessonStatusSchema]});

export const insertFeedbackInfo = feedBack => {
  console.log('insert feed back info **** ', feedBack);
  return new Promise((resolve, reject) => {
    try {
      realm.write(() => {
        realm.create('FeedBack', {
          lessonId: feedBack.lessonId,
          audioData: feedBack.audioData,
          commentData: feedBack.commentData,
        });
      });
      resolve();
    } catch (error) {
      reject();
    }
  });
};

// Check feedback by lesson Id
export const checkFeedBackAvailability = lessonId => {
  console.log('checkFeedBackAvailability **** ', lessonId);

  const feedbackData = realm.objects('FeedBack');
  const feedback = feedbackData.filtered(`lessonId == ${lessonId}`);
  return feedback[0] ? true : false;
};

export const insertLessonStatusInfo = lessonStatus => {
  return new Promise((resolve, reject) => {
    try {
      realm.write(() => {
        realm.create('LessonStatus', {
          lessonId: lessonStatus.lessonId,
          currentPosition: lessonStatus.currentPosition,
          feedbackStatus: lessonStatus.feedbackStatus,
        });
      });
      resolve();
    } catch (error) {
      reject();
    }
  });
};

// Get lesson status by lesson Id
export const getLessonStatus = lessonId => {
  console.log('getLessonStatus **** ', lessonId);

  const lessonStatusData = realm.objects('LessonStatus');
  const statusObj = lessonStatusData.filtered(`lessonId == ${lessonId}`);
  return statusObj[0];
};

// Update lesson status by lesson Id
export const updateLessonStatus = lessonObj => {
  console.log('update lesson status --> ', lessonObj);
  realm.write(() => {
    const lesson = realm.objects('LessonStatus');
    const statusObj = lesson.filtered(`lessonId == ${lessonObj.lessonId}`)[0];

    statusObj.currentPosition = lessonObj.currentPosition;
    statusObj.feedbackStatus = lessonObj.feedbackStatus;
  });
};
// Export the realm
export default realm;
