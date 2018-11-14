
// Create a BlogPost class that has
// an authorName
// a title
// a text
// a publicationDate
// Create a few blog post objects:
// "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
// Lorem ipsum dolor sit amet.
// "Wait but why" titled by Tim Urban posted at "2010.10.10."
// A popular long-form, stick-figure-illustrated blog about almost everything.
// "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.

// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(thrNm: string, ttl: string, txt: string, pblctndt: string) {
    this.authorName = thrNm;
    this.title = ttl;
    this.text = txt;
    this.publicationDate = pblctndt;
  }
}

class Blog {
  name: string;
  blog: BlogPost[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addBlogPost(blogPost: BlogPost): void {
    this.blog.push(blogPost);
  }

  deleteBlogPost(index: number): void {
    this.blog.splice(index, 1);
  }

  updateBlogPost (index: number, thrNm: string, ttl: string, txt: string, pblctndt: string): void {
    this.blog[index].authorName = thrNm;
    this.blog[index].title = ttl;
    this.blog[index].text = txt;
    this.blog[index].publicationDate = pblctndt;
  }
}

const blog = new Blog('My blog');

blog.addBlogPost(new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.'));
blog.addBlogPost(new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.'));
blog.addBlogPost(new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.'));

blog.updateBlogPost(0, 'Agatha Christie', 'Tíz kicsi néger', 'text', '2018. 11. 14.');

console.log(blog);
