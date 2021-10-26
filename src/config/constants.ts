import {ILesson, ILessonContent} from '../types/contentType';

export const LESSON_ID = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
};
export const Lessons: ILesson[] = [
  {
    id: 1,
    title: 'Japanese',
    description: 'Learn Japanese',
    icon: 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/e4/21/ce/e421ce9d-6f2d-7f7f-132b-e7e21a52136e/source/256x256bb.jpg', //'https://img.favpng.com/15/10/8/japan-icon-png-favpng-uutsT78eUqVTdHMjvCqpri1Su.jpg',
  },
  {
    id: 2,
    title: 'English',
    description: 'Learn English',
    icon: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/f8/56/b2/f856b2f8-2509-e720-c78e-1903d3347401/source/256x256bb.jpg',
  },
  {
    id: 3,
    title: 'Sinhala',
    description: 'Learn Sinhala',
    icon: 'https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/b2/7e/8e/b27e8ebb-ba39-3285-7e12-a1de71845d13/source/256x256bb.jpg',
  },
  {
    id: 4,
    title: 'German',
    description: 'Learn German',
    icon: 'https://www.amratpal.com/wp-content/uploads/2021/02/Vector.png',
  },
];

export const LessonContent: ILessonContent = {
  [LESSON_ID.ONE]: [
    {
      id: 1,
      type: 'Image',
      data: 'https://lh4.googleusercontent.com/proxy/n8lie1sN4jGABDuKpytGIIfEyESb8CqGEOUvJPHCtDDnP7xgqaaSiCIZWHSP4fNeTtoaveIAaiCJc7mzwZuTiWl2tBm1jPA=s0-d',
    },
    {
      id: 2,
      type: 'Image',
      data: 'https://i.pinimg.com/474x/db/df/ba/dbdfbadebfc8a257a059ca921e3dbf6f.jpg',
    },
    {
      id: 3,
      type: 'Image',
      data: 'https://image.shutterstock.com/z/stock-vector-japanese-kanji-with-meanings-vector-3199312.jpg',
    },
    {
      id: 4,
      type: 'Image',
      data: 'https://image.slidesharecdn.com/1436494786559f2bc217550-150710021946-lva1-app6892/95/ancient-japanese-culture-1-638.jpg?cb=1436494792',
    },
  ],

  [LESSON_ID.TWO]: [
    {
      id: 1,
      type: 'Article',
      data: `
      <h1>English Language</h1>
      <h2>Spoken language</h2>
      <img src="https://thumbs.dreamstime.com/z/english-british-england-language-education-concept-58368527.jpg" alt="My Dog"/>
      <br/>
      <hr/>
      <br/>
      <em style="textAlign: center;">Have a nice day with React Native</em>
      <div>
        <p>English is a West Germanic language of the Indo-European language family, originally spoken by the inhabitants of early medieval England. It is named after the Angles, one of the ancient Germanic peoples that migrated to the area of Great Britain that later took their name, England.</p>
      </div>
      `,
    },
    {
      id: 2,
      type: 'Article',
      data: `
      <h1>Essay on English Language: The International Language</h1>
      <h2>English</h2>
      <img src="https://englishlive.ef.com/blog/wp-content/uploads/sites/2/2015/05/how-english-became-the-global-language.jpg" alt="English"/>
      <br/>
      <hr/>
      <br/>
      <em style="textAlign: center;">Have a nice day with React Native</em>
      <div>
        <p>Language is important because it's one of the main ways to communicate and interact 
        with other people around us. It keeps us in contact with other people. English language is an example for the importance of a language because it is the international language and has become the most important language to people in many parts of the world.  It is most widely used in communicating around the world, Also it is spoken as the first language in many countries. English is playing a major role in many sections like education, medicine, engineering and business. 
        There are many reasons that makes English is the most important language in the world.</p>
      </div>
      `,
    },
    {
      id: 3,
      type: 'Article',
      data: `
      <h1>Origins and basic characteristics</h1>
      
      <br/>
      <hr/>
      <br/>
      <em style="textAlign: center;">Have a nice day with React Native</em>
      <div>
        <p>English belongs to the Indo-European family of languages and is therefore related to most other languages 
        spoken in Europe and western Asia from Iceland to India. The parent tongue, called Proto-Indo-European, was 
        spoken about 5,000 years ago by nomads believed to have roamed the southeast European plains. Germanic, 
        one of the language groups descended from this ancestral speech, is usually divided by scholars into three regional 
        groups: East (Burgundian, Vandal, and Gothic, all extinct), North (Icelandic, Faroese, Norwegian, Swedish, and Danish),
         and West (German, Dutch [and Flemish], Frisian, and English). Though closely related to English, German remains far more 
         conservative than English in its retention of a fairly elaborate system of inflections. Frisian, spoken by the inhabitants of the Dutch province of Friesland and the islands off the west coast of Schleswig, is the language most nearly related to Modern English. Icelandic, which has changed little over the last thousand years, is the
         living language most nearly resembling Old English in grammatical structure.</p>
         <br/>
         <h2>Indo-European languages in contemporary Eurasia</h2>
      <img src="https://cdn.britannica.com/s:690x388,c:crop/83/1983-050-705E524C/locations-languages-Indo-European-Eurasia.jpg" alt="World Map"/>
      </div>
      `,
    },
  ],

  [LESSON_ID.THREE]: [
    {
      id: 1,
      type: 'Image',
      data: 'https://imagesnotebook-static01.italki.com/197d1612-1f4c-4dfb-9f0d-b95deb531bc2.jpg',
    },
    {
      id: 2,
      type: 'Image',
      data: 'https://www.listenandlearn.org/blog/wp-content/uploads/2018/01/5.png',
    },
    {
      id: 3,
      type: 'Image',
      data: 'http://www.narenthiran.co.uk/language/sinhala_alphabet1.jpg',
    },
  ],

  [LESSON_ID.FOUR]: [
    {
      id: 1,
      type: 'Video',
      data: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
    },
    {
      id: 2,
      type: 'Video',
      data: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
    },
  ],
};

export const FEEDBACK_TYPE = {
  AUDIO: 'AUDIO',
  TEXT: 'TEXT',
};

export const NAVIGATION_SCREENS = {
  HOME: 'Home',
  LESSON_CONTENT: 'LessonContent',
  FEEDBACK: 'Feedback',
};
