import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import BlogWelcome from '../components/BlogWelcome'; 
import './Blog.css'; 
import blogList from '../content/blog.json'; 

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogContent, setBlogContent] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && blogList.length > 0) {
      const blogId = hash.replace("#blog-", ""); 
      const matchedBlog = blogList.find(blog => blog.id === blogId);
      if (matchedBlog) {
        handleSelectBlog(matchedBlog); 
      }
    }
  }, [blogList]);

  const handleSelectBlog = async (blog) => {
    setSelectedBlog(blog);
    if (blog.htmlFile) {
      try {
        const response = await fetch(`/blogs/${blog.htmlFile}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const htmlContent = await response.text();
        setBlogContent(htmlContent);
      } catch (error) {
        console.error("Failed to load blog content:", error);
        setBlogContent('<p>Error loading blog content.</p>');
      }
    }
    else{
        setBlogContent(blog.content);
    }
    window.location.hash = `blog-${blog.id}`;
  };

  const handleBackToWelcome = () => {
    setSelectedBlog(null);
    setBlogContent(''); // Clear blog content when going back to the welcome page
  };

  return (
    <div className="container-fluid">
        <div className="row">
            <nav className="col-md-3 col-lg-2 d-md-block bg-light full-height-sidebar sidebar">
            <div className="sidebar-sticky sidebar-mt-offset">
                <Link className="nav-link" to="#" onClick={handleBackToWelcome}>
                    <h4>Blog</h4>
                </Link>
                <ul className="nav flex-column">
                {blogList.map((blog) => (
                    <li key={blog.id} className="nav-item">
                    <Link
                        className="nav-link"
                        to={`#blog-${blog.id}`} 
                        onClick={() => handleSelectBlog(blog)}
                    >
                        {blog.title}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            </nav>
            <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4 margin-top-offset margin-bottom-offset">
                {selectedBlog ? (
                    <div className="Blog">
                    <div className="content" dangerouslySetInnerHTML={{ __html: blogContent }} />
                    </div>
                ) : (
                    <BlogWelcome blogs={blogList} onSelectBlog={handleSelectBlog} />
                )}
            </div>
        </div>
    </div>
  );
}

export default Blog;
