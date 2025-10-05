// agent/scorer.js
require('dotenv').config(); // Load environment variables from .env

const { OpenAI } = require('openai');

// The client automatically uses the OPENAI_API_KEY environment variable
const openai = new OpenAI(); 

console.log("OpenAI client initialized.");

// This client will be used for all LLM calls.
module.exports = { openai };
// agent/scorer.js (continuation or combined with setup)
const { openai } = require('./scorer.js'); // Assuming initialization is here
const { parseResume } = require('../utils/parser'); // Import parser

/**
 * Uses an LLM to score a resume against a job description.
 * @param {string} resumePath - Local path to the resume file.
 * @param {string} jobDescription - Text of the job description.
 * @returns {Promise<object>} A JSON object containing the score and feedback.
 */
async function scoreResumeAgent(resumePath, jobDescription) {
    // 1. Get raw text from the resume
    const resumeText = await parseResume(resumePath);
    if (!resumeText) {
        return { error: 'Could not extract text from resume file.' };
    }

    // 2. Define the Agent's Persona and Task (System Prompt)
    const systemPrompt = `
        You are an **Expert ATS and Senior Technical Recruiter**. 
        Your task is to analyze the candidate's resume against the provided job description.
        You must only return a single, valid JSON object that strictly adheres to the schema.
    `;

    // 3. Define the detailed task and structured output request (User Prompt)
    const userPrompt = `
        **JOB DESCRIPTION (JD):**
        ---
        ${jobDescription}
        ---

        **CANDIDATE RESUME TEXT:**
        ---
        ${resumeText}
        ---

        **Your Scoring Criteria and Output Format:**
        1. **overall_score (Integer 0-100):** The numerical fit score.
        2. **strengths (Array of Strings):** 3-5 specific points where the resume excels (e.g., 'Direct experience with React and Tailwind CSS').
        3. **gaps (Array of Strings):** 3-5 specific skills/experiences from the JD that are missing or weak on the resume (e.g., 'Lacks experience in cloud deployment/AWS').
        4. **summary (String):** A brief, 3-sentence summary of the candidate's fit.

        **Example JSON Output (Must adhere to this structure):**
        {
          "overall_score": 78,
          "strengths": ["...", "..."],
          "gaps": ["...", "..."],
          "summary": "..."
        }
    `;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini", // Cost-effective and highly capable
            messages: [
                { "role": "system", "content": systemPrompt },
                { "role": "user", "content": userPrompt }
            ],
            // **Crucial: Request JSON Object as the response format**
            response_format: { type: "json_object" } 
        });

        const jsonString = response.choices[0].message.content;
        return JSON.parse(jsonString);

    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        return { error: `LLM scoring failed: ${error.message}` };
    }
}

// Example usage (for testing)
async function runTest() {
    const testJobDesc = "Seeking a Node.js Backend Developer with 5+ years of experience, specializing in Express.js, MongoDB, and CI/CD pipelines (GitHub Actions).";
    // NOTE: You must create a 'sample-resume.pdf' or 'sample-resume.docx' file for this test!
    const testResumePath = './sample-resume.pdf'; 
    
    console.log(`\n--- Running Resume Scorer for: ${testResumePath} ---`);
    
    const scoreResult = await scoreResumeAgent(testResumePath, testJobDesc);
    
    console.log('\n--- SCORER OUTPUT ---');
    console.log(JSON.stringify(scoreResult, null, 2));
    console.log('---------------------\n');
}

// Uncomment the line below to test the function (ensure you have the test resume file)
// runTest(); 
// module.exports = { scoreResumeAgent }; // Export for use in other parts of the main app