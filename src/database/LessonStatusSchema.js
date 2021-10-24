import Realm from 'realm';

// Declare Schema
class LessonStatusSchema extends Realm.Object {}
LessonStatusSchema.schema = {
  name: 'LessonStatus',
  properties: {
    id: 'int',
    lessonId: 'int',
    currentPosition: 'int',
    feedbackStatus: 'bool',
  },
};

// Create realm
let realm = new Realm({schema: [LessonStatusSchema], schemaVersion: 1});

export const insertLessonStatusInfo = lessonStatus => {
  return new Promise((resolve, reject) => {
    try {
      realm.write(() => {
        realm.create('LessonStatus', {
          id: lessonStatus.id,
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
