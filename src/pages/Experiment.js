
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';
import './Experiment.css';

// const API_URL = 'https://api-inference.huggingface.co/models/deepset/roberta-base-squad2';
// const API_TOKEN = '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'; // Replace with your actual Hugging Face API token
const SERVERLESS_API_URL = 'https://mm-nft-2024.vercel.app/api/fetchAnswerAI'; // Replace with your deployed serverless function URL

function Experiment() {
    const [question, setQuestion] = useState('');
    // const [context, setContext] = useState('I am Martin and my profession is a physicist. I am 28 years old.');
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
    
    return (
        <div className='fluid-container'>
            <div className='row mx-auto'>
                <div className='col-12 mt-2 mb-2 fixed-height-div'>
                </div>
            </div>
            <div className='row mx-auto'>
                <div className='col-9 mt-2 mb-2'>
                <input
                        type='text'
                        value={question}
                        onChange={handleQuestionChange}
                        onKeyPress={handleKeyPress}
                        placeholder='Type something...'
                    />
                </div>
                <div className='col-3 mt-2 mb-2 d-flex align-items-center justify-content-center'>
                    <button class="btn btn-outline-primary" onClick={fetchAnswer} disabled={loading}>
                        {loading ? 'Fetching...' : 'Ask!'}
                    </button>
                </div>
            </div>
            <div className='row mx-auto'>
                    {answer && (
                        <p><strong>Answer:</strong> {answer}</p>
                    )}
            </div>
        </div>
    );
}

export default Experiment;