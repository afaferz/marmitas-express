import { defineStore } from "pinia";
import { Blog } from "~/models/blog";
export const useBlogStore = defineStore("blog/posts", {
  state: () => ({
    items: [] as Blog.Post[],
  }),
});
