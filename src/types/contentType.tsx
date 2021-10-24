export interface ILesson {
  id: number;
  title: string;
  description: string | undefined;
  icon: string | undefined;
}

export interface IContent {
  id: number;
  type: string;
  data: string;
}

export interface ILessonContent {
  [x: number]: IContent[];
}
