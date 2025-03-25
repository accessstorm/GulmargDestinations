declare module 'react-typewriter-effect' {
  import { Component } from 'react';

  interface TypewriterProps {
    onInit: (typewriter: {
      typeString: (str: string) => any;
      deleteAll: () => any;
      pauseFor: (ms: number) => any;
      deleteChars: (count: number) => any;
      start: () => void;
    }) => void;
    options?: {
      loop?: boolean;
      autoStart?: boolean;
      cursor?: string;
      delay?: number;
    };
  }

  export default class Typewriter extends Component<TypewriterProps> {}
} 