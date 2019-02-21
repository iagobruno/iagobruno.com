declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'delegate';
declare module 'react-portal';

interface WorkItemType {
  title: string;
  subTitle: string;
  url?: string;
  image: string;
  description: string;
  totalDevelopmentTime?: string;
  technologies?: Array<string>;
}

interface SkillItemType {
  title: string;
  percentage: number;
  color: string;
}

interface SlideItemType {
  src: string;
  alt: string;
}

interface LinkItemType {
  text: string;
  url: string;
}