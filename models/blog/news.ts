export namespace News {
  interface Content {}
  interface Author {}
  export interface Root {
    id: string;
    title: string;
    link?: string;
    content: Content;
    author: Author;
  }
}
