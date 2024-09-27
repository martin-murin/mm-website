import React from 'react';

const BlogEntry = ({ title, timePublished, keywords, technologies, abstract, onClick }) => {
  return (
    <div className="card mb-3" onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{timePublished}</h6>
        <p className="card-text">{abstract}</p>
        <div className='mt-2 mb-2'>
          {keywords.map((keyword, index) => (
            <span key={index} className="skills-badge badge badge-primary mr-2">
              {keyword}
            </span>
          ))}
        </div>
        <div className='mt-2 mb-2'>
          {technologies.map((technology, index) => (
            <span key={index} className="technology-badge badge badge-primary mr-2">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogEntry;