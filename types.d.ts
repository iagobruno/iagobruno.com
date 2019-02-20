declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'delegate';
interface WorkItem {
  title: string;
  subTitle: string;
  url?: string;
  image: string;
  description: string;
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