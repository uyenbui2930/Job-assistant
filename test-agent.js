// test-agent.js - Save this in your project root
const ResumeScorer = require('./src/agents/resume-scorer');

async function testAgent() {
  try {
    const scorer = new ResumeScorer();
    
    const resumeText = "John Doe Software Engineer with 3 years experience in JavaScript, React, Node.js, and Python. Built web applications using MongoDB and PostgreSQL.";
    
    const jobDescription = "We are seeking a Software Developer with experience in JavaScript, React, and database management. 2+ years experience required.";
    
    console.log('🧪 Testing Resume Scorer Agent...');
    const result = await scorer.analyze(resumeText, jobDescription);
    
    console.log('\n✅ Agent Test Results:');
    console.log('Score:', result.score);
    console.log('Matched Skills:', result.matchedSkills);
    console.log('Missing Skills:', result.missingSkills);
    console.log('Recommendations:', result.recommendations);
    
  } catch (error) {
    console.error('❌ Agent test failed:', error);
  }
}

testAgent();