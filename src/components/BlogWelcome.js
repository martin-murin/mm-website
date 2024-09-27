import React from 'react';
import BlogEntry from './BlogEntry';

const WelcomePage = ({ blogs, onSelectBlog }) => {
  return (
    <div>
      <h2>Welcome to the Blog</h2>
      <p>Select an article to read:</p>
      {blogs.map((blog, index) => (
        <BlogEntry
          key={index}
          title={blog.title}
          timePublished={blog.timePublished}
          keywords={blog.keywords}
          technologies={blog.technologies}
          abstract={blog.abstract}
          onClick={() => onSelectBlog(blog)}
        />
      ))}
    </div>
  );
};

export default WelcomePage;
