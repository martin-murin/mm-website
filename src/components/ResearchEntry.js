import React from 'react';
import './ResearchEntry.css';

const ResearchEntry = ({id, header, timeRange, description, keywords, link }) => {
  return (
    <div id={id} className="mt-4 research-entry text-justify">
      <h3>{header}</h3>
      <h6>{timeRange}</h6>
      {keywords.map((keyword, index) => (
        <span key={index} className="badge skills-badge mr-1 mb-2">{keyword}</span>
      ))}
      {description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {link ?(
      <span className="badge link-badge mr-1 mb-2"><a href={link.url} target="_blank" rel="noopener noreferrer" className='link-style'>{link.text}</a></span>
        ) : (
            null
        )}
    </div>
  );
};

export default ResearchEntry;