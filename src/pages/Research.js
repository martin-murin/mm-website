import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Research.css';
import ResearchEntry from '../components/ResearchEntry';
import ContentResearch from '../content/research.json';

function Research() {
    const content = ContentResearch || {};

  return (
    <div className="container-fluid">
        <div className="row">
        <nav className="col-md-3 col-lg-2 d-md-block bg-light full-height-sidebar sidebar">
            <div className="sidebar-sticky sidebar-mt-offset">
            <ul className="nav flex-column">
                <li key="research" className="nav-item">
                    <Link className="nav-link" to="#research" scroll={el => window.scroll({ top: el.offsetTop, left: 0, behavior: 'instant' })} >
                    <h4>Research portfolio</h4>
                    </Link>
                </li>
                {content.projects.map((project) => (
                <li key={project.id} className="nav-item">
                    <Link className="nav-link" to={`#project-${project.id}`} scroll={el => window.scroll({ top: el.offsetTop+10, left: 0, behavior: 'instant' })} > 
                    {project.name}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 margin-top-offset margin-bottom-offset">
            <div className='row'>
                <div id="research" className="col-12 col-md-6 text-justify">
                    <h2>{content.header.pageHeading}</h2>
                    <p>{content.header.subheading}</p>
                    <p>{content.header.motivation}</p>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <img src="/images/thesis-cover.jpg" alt="thesis-cover" className="img-fluid max-height-img" />
                    <p><a href="https://www.librarysearch.manchester.ac.uk/permalink/44MAN_INST/bofker/alma992986568212201631" target="_blank" rel="noopener noreferrer">Access full thesis</a></p>
                </div>
            </div>
            <div className='row'>
                <div className="col-12 text-justify">
                    <h4>Introduction</h4>
                    <p>{content.header.introduction1}</p>
                    <p>{content.header.introduction2}</p>
                </div>
            </div>
            {content.projects.map((project) => (
                <ResearchEntry
                    id={`project-${project.id}`}
                    key={project.id}
                    header={project.name}
                    timeRange={project.timeRange}
                    description={project.description}
                    keywords={project.keywords}
                    link={project.link}
                />
            ))}
        </main>
        </div>
    </div>

  );
}

export default Research;
