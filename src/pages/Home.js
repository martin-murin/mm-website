import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';
import './Home.css';
import InterestsCard from './../components/InterestsCard';
import ContentHome from './../content/home.json';
import AnimatedQuestionSuggestions from './../components/AnimatedQuestionSuggestions';
import ParticlesBackgroundDemo from './../components/ParticlesBackgroundDemo';

const SERVERLESS_API_URL = 'https://mm-nft-2024.vercel.app/api/fetchAnswerAI'; // deployed serverless function URL
function Home() {

    const content = ContentHome || {};
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            await fetchAnswer();
        }
    };

    const fetchAnswer = async () => {
        if (!question) {
            alert("Please enter a question.");
            return;
        }

        setLoading(true);
        setAnswer('');

        try {
            const response = await axios.post(SERVERLESS_API_URL, { question });

            setAnswer(response.data.answer);
        } catch (error) {
            console.error("Error fetching answer:", error);
            setAnswer("Sorry, an error occurred while fetching the answer.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log("Home component mounted");
      }, []);

    return (
    <div className="Home">
            <div className='fluid-container'>
                <div className='row mx-auto'>
                    <div className='col-12 fixed-height-div'>
                    </div>
                </div>
            </div>

            {/* Introduction section */}
            <div className='content-wrapper'>
                <div className="row position-relative">      
                    <img src="./images/chamonix-mt-blanc.jpg" className="img-fluid img-limited" alt="Background Image"/>
                    <div className="col-md-12 gradient-overlay"></div>
                </div>
                <div className="col-12 name-profession">
                    <h1 className='text-center'>{content.intro.name}</h1>
                    <h3 className='text-center'>{content.intro.profession}</h3>
                </div>
            </div>
            <div className="container-fluid mb-4 intro-panel">
                <div className="particle-container">
                    <ParticlesBackgroundDemo />
                </div>
                <div className="content-wrapper">
                    <div className='row justify-content-center mt-4'>
                        <div className='col-md-9'>
                            <AnimatedQuestionSuggestions />
                        </div>
                    </div>
                    <div className='row justify-content-center align-items-center mt-4'>
                        <div className='col-md-7'>
                            <input
                                type='text'
                                value={question}
                                onChange={handleQuestionChange}
                                onKeyPress={handleKeyPress}
                                placeholder='Ask me anything...'
                                className='form-control'
                            />
                        </div>
                        <div className='col-md-2'>
                            <button className="btn btn-outline-primary w-100" onClick={fetchAnswer} disabled={loading}>
                                {loading ? 'Fetching...' : 'Ask!'}
                            </button>
                        </div>
                    </div>
                    {answer && (
                        <div className='row mt-4'>
                            <div className='col-md-12'>
                                <p className='text-center'><strong>Answer:</strong> {answer}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="container mt-4 mb-4">
                <div className="row">      
                    <div className="col-md-12">
                        <h4 className='text-center'>About me</h4>
                        <p className='text-center mr-4 ml-4'>
                            {content.intro.summary}
                        </p>
                        {/* Button to download CV */}
                        <div className="col-12 mt-2 mb-2">
                            <a href="files/MM_CV_2024.pdf" className="btn btn-outline-dark btn-lg btn-block">Download CV</a>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Skills Section with Cards */}
            <div className="container-fluid text-center mt-5">
                <div className="row custom-gutter justify-content-center">
                    <h2 className="text-center">{content.skills.heading}</h2>
                    {content.skills.categories.map(category => (
                        <div className="card mt-2 mb-2 mr-md-4 ml-md-4 col-12 col-md-3 custom-card" key={category.title}>
                            <div className="card-body text-center">
                                <h4 className="card-title">{category.title}</h4>
                                <ul className='list-unstyled'>
                                    {category.skills.map(skill => (
                                    <li className='mb-2' key={skill}>
                                        {(
                                            <>
                                            {skill.lang}
                                            <div className="progress">
                                                <div className="progress-bar pb-color" role="progressbar" style={{width: `${skill.level}%`}} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            </>
                                        )}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


            {/* Research projects section */}
            <div className="container-fluid mt-5">
                <div className="row custom-gutter justify-content-center">
                    <div className="col-12">
                        <h2 className="text-center">{content.research.heading}</h2>
                    </div>
                    {content.research.projects.map((project, index) => (
                    <>
                        <div className="card mt-2 mb-4 col-12 col-md-9 col-lg-8 custom-card-link" key={index}>
                        <HashLink to = {`/research#project-${project.id}`} className="project-link" scroll={el => window.scroll({ top: el.offsetTop, left: 0, behavior: 'instant' })} >
                            <div className="card-body text-center">
                                <h4 className="card-title">{project.title}</h4>
                                <ul className='list-unstyled'>
                                    <li>{project.description}</li>
                                </ul>
                            </div>
                        </HashLink>
                        </div>
                        {/* Image section for each project */}
                        <div className="col-lg-2 col-md-3 mt-2 mb-2 d-flex align-items-center justify-content-center">
                        <img
                            src={project.imageSrc}
                            alt={project.title}
                            className="img-fluid"
                        />
                        </div>
                    </>
                    ))}
                </div>
            </div>

            {/* Education section */}
            <div className="container-fluid mt-5">
                <div className="row custom-gutter justify-content-center">
                    <div className="col-12">
                        <h2 className="text-center">{content.education.heading}</h2>
                    </div>

                    {content.education.schools.map((school, index) => (
                    <>
                        <div className="card mt-2 mb-2 col-12 col-md-9 col-lg-8 custom-card" key={index}>
                            <div className="card-body text-center">
                            <div className="row">
                                {/* Top left: Degree */}
                                <div className="col-md-6 mt-2">
                                <h4 className="card-title">{school.degree}</h4>
                                </div>
                                {/* Top right: Dates */}
                                <div className="col-md-6 mt-2">
                                <p className="card-text text-muted">{school.startYear} - {school.endYear}</p>
                                </div>
                            </div>
                            <div className="row">
                                {/* Below left: University */}
                                <div className="col-md-6 mt-2">
                                <p className="card-text">{school.name}</p>
                                </div>
                                {/* Below right: Place */}
                                <div className="col-md-6 mt-2">
                                <p className="card-text">{school.place}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </>
                    ))}
                </div>
            </div>
            {/* Interests Section */}
            <div className="container-fluid mt-5">
                <div className="row mt-5">
                    <div className="col-md-11 mx-auto">
                        <h2 className='text-center'>{content.interests.heading}</h2>

                        <div className="row">
                            {content.interests.categories.map((category, index) => (
                            <InterestsCard
                            title={category.title}
                            description={category.description}
                            imageSrc={category.imageSrc} 
                            />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='fluid-container'>
                <div className='row mx-auto'>
                    <div className='col-12 mt-2 mb-2 fixed-height-div'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
