import Realm from 'realm';

// Declare Schema
class FeedBackSchema extends Realm.Object {}
FeedBackSchema.schema = {
  name: 'FeedBack',
  properties: {
    id: 'int',
    lessonId: 'int',
    data: 'string',
  },
};

// Create realm
let realm = new Realm({schema: [FeedBackSchema], schemaVersion: 1});

export const insertFeedbackInfo = feedBack => {
  return new Promise((resolve, reject) => {
    try {
      realm.write(() => {
        realm.create('FeedBack', {
          id: feedBack.id,
          lessonId: feedBack.lessonId,
          data: feedBack.data,
        });
      });
      resolve();
    } catch (error) {
      reject();
    }
  });
};

// Export the realm
export default realm;
