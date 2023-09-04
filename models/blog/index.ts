import { News } from "./news";
import { Post } from "./posts";
export namespace Blog {
  export type Post = Post.Root;
  export type New = News.Root;
}
