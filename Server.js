const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Replace with your frontend URL

const configuration = new Configuration({
  apiKey: 'your-openai-api-key', // Replace with your OpenAI API key
});
const openai = new OpenAIApi(configuration);

// AI Career Prediction Endpoint
app.post('/predict', async (req, res) => {
  const { skills, preferences } = req.body;

  if (!skills || !preferences) {
    return res.status(400).send('Skills and preferences are required!');
  }

  try {
    const response = await openai.createCompletion({
      model: 'gpt-3.5-turbo',
      prompt: `Suggest a career roadmap for someone with these skills: ${skills} and preferences: ${preferences}.`,
      max_tokens: 150,
    });
    res.json({ careerPath: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error with AI Prediction:', error.response ? error.response.data : error.message);
    res.status(500).send('Error with AI prediction');
  }
});

// Start the server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
