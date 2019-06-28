declare module 'react-portal';
declare module 'next-ga';

declare interface Window {
  ga: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
