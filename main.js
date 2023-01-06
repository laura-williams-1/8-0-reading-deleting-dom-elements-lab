const allPost = document.querySelector("li");
console.log(allPost);
allPost.remove();
// - [ ] Remove the "All Posts" link from the header.
// - [ ] Remove the `span` element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
// - [ ] Remove the last post from the page, titled "Stop Planning".
// - [ ] Remove all titles from all non-featured posts.

const readTime = document.querySelector("span");
readTime.remove();

const posts = document.querySelectorAll("article");
console.log(posts);
posts[posts.length - 1].remove();

const titles1 = document.querySelectorAll("h3");

titles1.forEach((title) => title.remove());
