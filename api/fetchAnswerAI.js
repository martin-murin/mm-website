const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_URL = 'https://api-inference.huggingface.co/models/deepset/roberta-base-squad2';
const API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;

const contextFilePath = path.resolve(__dirname, 'contextAI.json');
let CONTEXT = '';

try {
    const contextData = fs.readFileSync(contextFilePath, 'utf8');
    CONTEXT = JSON.parse(contextData).context;
} catch (error) {
    console.error('Error reading context file:', error);
    CONTEXT = ''; // Fallback or handle error appropriately
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ error: 'Question is required' });
    }

    try {
        const response = await axios.post(API_URL, {
            inputs: {
                question,
                context: CONTEXT
            },
            parameters: {
                max_answer_len: 300,
                num_beams: 3
            }
        }, {
            headers: { Authorization: `Bearer ${API_TOKEN}` }
        });

        return res.status(200).json({ answer: response.data.answer });
    } catch (error) {
        console.error('Error fetching answer:', error);
        return res.status(500).json({ error: 'Failed to fetch answer' });
    }
};

