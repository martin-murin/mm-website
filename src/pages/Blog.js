import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BlogWelcome from '../components/BlogWelcome'; 
import './Blog.css'; 
import blogList from '../content/blog.json'; 

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogContent, setBlogContent] = useState('');
  const location = useLocation(); 

  useEffect(() => {
    // Extract the hash part and remove leading characters
    const hash = window.location.hash.replace('#/blog#', '');
    if (hash && blogList.length > 0) {
      const matchedBlog = blogList.find(blog => blog.id === hash);
      if (matchedBlog) {
        handleSelectBlog(matchedBlog); 
      }
      else{
        setSelectedBlog(null); 
        setBlogContent('');
      }
    }
  }, [blogList, location]);

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
    } else {
      setBlogContent(blog.content);
    }
    window.location.hash = `#/blog#${blog.id}`;
  };

  const handleBackToWelcome = () => {
    setSelectedBlog(null);
    setBlogContent(''); // Clear the blog content when returning to the welcome page
    window.location.hash = ''; // Clear the hash when going back
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar for blog list */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-light full-height-sidebar sidebar">
          <div className="sidebar-sticky sidebar-mt-offset">
            {/* Back to Welcome Link */}
            <Link className="nav-link" to="#" onClick={handleBackToWelcome}>
              <h4>Blog</h4>
            </Link>
            <ul className="nav flex-column">
              {/* List of blog titles */}
              {blogList.map((blog) => (
                <li key={blog.id} className="nav-item">
                  <Link
                    className="nav-link"
                    to={`#/blog#${blog.id}`} // Updated to ensure correct navigation
                    onClick={() => handleSelectBlog(blog)}
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main content area */}
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
