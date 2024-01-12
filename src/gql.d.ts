// gql.d.ts file
declare module '*.gql' {
  import { DocumentNode } from 'gql';

  const value: DocumentNode;
  export = value;
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
