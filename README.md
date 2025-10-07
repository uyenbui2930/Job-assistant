# Job Assistant AI - Backend System

> An intelligent job application management system powered by AI agents that help users optimize their resumes, generate tailored application responses, and track job applications through an orchestrated multi-agent architecture.

[![Node.js]](https://nodejs.org/)
[![Express]](https://expressjs.com/)
[![PostgreSQL]](https://www.postgresql.org/)
[![License]]()

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Agentic AI System](#-agentic-ai-system)
- [Database Schema](#-database-schema)
- [Project Structure](#-project-structure)
- [Testing](#-testing)
- [Security](#-security)
- [Team Collaboration](#-team-collaboration)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Future Enhancements](#-future-enhancements)

---

## 🎯 Overview

Job Assistant AI is a comprehensive backend system designed to streamline the job application process through intelligent automation. The system employs an **Agentic AI architecture** where multiple specialized AI agents work collaboratively through a central orchestrator to provide:

- **Resume analysis and matching** against job descriptions
- **Intelligent answer generation** for application questions
- **Automated profile extraction** from resumes
- **Application tracking and analytics** dashboard
- **Secure user authentication** and data management

### The Problem We Solve

Job seekers face several challenges:
- ❌ Difficulty tailoring resumes for each position
- ❌ Time-consuming application processes
- ❌ Uncertainty about resume-job fit
- ❌ Writing compelling application responses
- ❌ Tracking multiple applications

### Our Solution

✅ AI-powered resume scoring and recommendations  
✅ Automated profile data extraction for forms  
✅ Personalized answer generation  
✅ Comprehensive application tracking  
✅ Data-driven insights and analytics  

---

## ✨ Key Features

### 1. **Resume Analysis & Scoring**
- Analyzes resume content against job descriptions
- Calculates match scores (0-100)
- Identifies matched and missing skills
- Provides actionable recommendations
- Analyzes experience level and education match

### 2. **AI-Powered Answer Generation**
- Generates personalized responses to application questions
- Context-aware based on resume and job description
- Multiple question types supported
- Provides answer improvement tips
- Customizable tone and style

### 3. **Profile Autofill**
- Extracts structured data from resumes
- Parses personal information, contact details
- Identifies work experience and education
- Categorizes skills by type
- Confidence scoring for extracted data

### 4. **Application Tracking**
- Comprehensive application management (CRUD operations)
- Status tracking through application lifecycle
- Timeline visualization
- Notes and attachments support
- Filter and search capabilities

### 5. **Dashboard & Analytics**
- Real-time application statistics
- Status distribution analytics
- Agent usage metrics
- Application pipeline visualization
- Time-based trend analysis

### 6. **Secure Authentication**
- JWT-based authentication
- Bcrypt password hashing
- Protected API endpoints
- Token expiration management
- User session handling

---

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Client Layer                          │
│              (Frontend Application)                      │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/REST
                     ▼
┌─────────────────────────────────────────────────────────┐
│                   API Gateway                            │
│              (Express.js Server)                         │
│  ┌────────────────────────────────────────────────┐    │
│  │         Authentication Middleware              │    │
│  │              (JWT Validation)                  │    │
│  └────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────┐    │
│  │            Route Handlers                      │    │
│  │  • Auth Routes    • Resume Routes              │    │
│  │  • Application Routes • Dashboard Routes       │    │
│  └────────────────────────────────────────────────┘    │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Agent Orchestration Layer                   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │          Agent Orchestrator                      │  │
│  │      (Coordinates AI Agents)                     │  │
│  │  • Task routing                                  │  │
│  │  • Workflow management                           │  │
│  │  • Result aggregation                            │  │
│  └──────────┬───────────────┬──────────┬────────────┘  │
│             │               │          │                │
│             ▼               ▼          ▼                │
│  ┌──────────────┐ ┌─────────────┐ ┌──────────────┐   │
│  │   Resume     │ │   Answer    │ │   Autofill   │   │
│  │   Scorer     │ │  Generator  │ │    Agent     │   │
│  │   Agent      │ │    Agent    │ │              │   │
│  └──────────────┘ └─────────────┘ └──────────────┘   │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  Data Layer                              │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │         PostgreSQL Database                      │  │
│  │  • users              • resumes                  │  │
│  │  • job_applications   • agent_results            │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │         File Storage                             │  │
│  │  • Resume files (PDF, DOCX, TXT)                │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Request Flow Example

```
User uploads resume → API receives file → Stores in database
                                       ↓
User requests analysis → Orchestrator invokes Resume Scorer
                                       ↓
Resume Scorer analyzes → Returns score and recommendations
                                       ↓
Orchestrator stores results → Returns to user via API
```

### Agentic Architecture Principles

1. **Modularity**: Each agent is independent and self-contained
2. **Orchestration**: Central coordinator manages agent interactions
3. **Scalability**: New agents can be added without modifying existing ones
4. **Reusability**: Agents can be combined in different workflows
5. **Observability**: All agent actions are logged and tracked

---

## 🛠️ Technology Stack

### Backend Core
- **Runtime**: Node.js v16+
- **Framework**: Express.js 4.18
- **Language**: JavaScript (ES6+)
- **Architecture**: RESTful API, Agentic AI Pattern

### Database
- **Primary Database**: PostgreSQL 12+
- **ORM**: Native `pg` driver with parameterized queries
- **Schema**: Relational with foreign key constraints

### Authentication & Security
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt with salt rounds
- **CORS**: Configurable cross-origin resource sharing
- **Input Validation**: Server-side validation

### File Handling
- **Upload Middleware**: Multer
- **Supported Formats**: PDF, DOC, DOCX, TXT
- **Storage**: Local filesystem (production: cloud storage)

### Development Tools
- **Process Manager**: Nodemon (development)
- **Environment Variables**: dotenv
- **API Testing**: curl, Postman, PowerShell scripts

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v12 or higher) - [Download](https://www.postgresql.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)

### Installation Steps

#### 1. Clone/Download the Project

```bash
# If using Git
git clone <repository-url>
cd job-assistant-backend

# Or download and extract ZIP file
cd job-assistant-backend
```

#### 2. Install Dependencies

```bash
npm install
```

This will install:
- express, cors, dotenv
- pg (PostgreSQL driver)
- bcryptjs, jsonwebtoken
- multer (file uploads)
- nodemon (dev dependency)

#### 3. Set Up PostgreSQL Database

**Option A: Using psql command line**
```bash
# Connect to PostgreSQL
psql -U postgres

# Create database and user
CREATE DATABASE job_assistant;
CREATE USER job_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE job_assistant TO job_user;

# Grant schema permissions
\c job_assistant
GRANT ALL PRIVILEGES ON SCHEMA public TO job_user;
GRANT CREATE ON SCHEMA public TO job_user;

# Exit
\q
```

**Option B: Using pgAdmin**
1. Open pgAdmin
2. Right-click "Databases" → Create → Database
3. Name: `job_assistant`
4. Right-click "Login/Group Roles" → Create → Login/Group Role
5. Name: `job_user`, Password: your choice
6. In SQL tab, run:
```sql
GRANT ALL PRIVILEGES ON DATABASE job_assistant TO job_user;
GRANT ALL PRIVILEGES ON SCHEMA public TO job_user;
```

#### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=job_assistant
DB_USER=job_user
DB_PASSWORD=your_secure_password

# JWT Secret (generate a secure random string)
# You can generate one using: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# File Upload Configuration
MAX_FILE_SIZE=5242880
```

**Security Note**: 
- Never commit `.env` to version control
- Use strong passwords in production
- Generate a secure JWT_SECRET

#### 5. Start the Server

**Development mode** (with auto-restart):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

You should see:
```
📊 Connected to PostgreSQL database
✅ Database tables initialized successfully
🚀 Job Assistant API server running on port 3000
📍 Health check: http://localhost:3000/api/health
🌍 Environment: development
```

#### 6. Verify Installation

Test the health endpoint:
```bash
curl http://localhost:3000/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Job Assistant API is running",
  "timestamp": "2025-09-27T10:00:00.000Z"
}
```

**Run the test suite**:
```powershell
# Windows PowerShell
.\simple-test.ps1

# Or use the comprehensive test suite
.\test-all-endpoints.ps1
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:3000
```

### Authentication

Most endpoints require authentication via JWT token:
```
Authorization: Bearer <your_jwt_token>
```

Obtain a token by registering or logging in.

---

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "555-1234" (optional)
}
```

**Success Response (201)**:
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Response (400)**:
```json
{
  "success": false,
  "message": "Email and password are required"
}
```

---

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Success Response (200)**: Same as register

**Error Response (401)**:
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

### Resume Management Endpoints

#### Upload Resume
```http
POST /api/resumes/upload
Authorization: Bearer <token>
Content-Type: multipart/form-data

resume: <file> (PDF, DOC, DOCX, TXT - max 5MB)
```

**Success Response (200)**:
```json
{
  "success": true,
  "message": "Resume uploaded successfully",
  "data": {
    "id": 1,
    "filename": "john_doe_resume.pdf",
    "size": 245678,
    "uploadDate": "2025-09-27T10:30:00Z"
  }
}
```

---

#### Get User's Resumes
```http
GET /api/resumes/my-resumes
Authorization: Bearer <token>
```

**Success Response (200)**:
```json
{
  "success": true,
  "data": {
    "resumes": [
      {
        "id": 1,
        "filename": "resume_v1.pdf",
        "created_at": "2025-09-27T10:30:00Z"
      },
      {
        "id": 2,
        "filename": "resume_v2.pdf",
        "created_at": "2025-09-28T14:20:00Z"
      }
    ],
    "count": 2
  }
}
```

---

#### Get Resume Details
```http
GET /api/resumes/:id
Authorization: Bearer <token>
```

**Success Response (200)**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "filename": "resume.pdf",
    "contentText": "John Doe\nSoftware Engineer...",
    "createdAt": "2025-09-27T10:30:00Z"
  }
}
```

---

#### Delete Resume
```http
DELETE /api/resumes/:id
Authorization: Bearer <token>
```

**Success Response (200)**:
```json
{
  "success": true,
  "message": "Resume deleted successfully"
}
```

---

### Job Application Endpoints

#### Create Application
```http
POST /api/applications
Authorization: Bearer <token>
Content-Type: application/json

{
  "resumeId": 1,
  "companyName": "Tech Corp",
  "jobTitle": "Senior Software Engineer",
  "jobDescription": "We are seeking an experienced developer...",
  "applicationUrl": "https://techcorp.com/careers/12345",
  "notes": "Applied via LinkedIn"
}
```

**Success Response (201)**:
```json
{
  "success": true,
  "message": "Job application created successfully",
  "data": {
    "id": 1,
    "company_name": "Tech Corp",
    "job_title": "Senior Software Engineer",
    "status": "not_submitted",
    "created_at": "2025-09-27T11:00:00Z"
  }
}
```

---

#### Get User's Applications
```http
GET /api/applications/my-applications
Authorization: Bearer <token>

Query Parameters:
  - status: Filter by status (optional)
  - limit: Number of results (default: 50)
  - offset: Pagination offset (default: 0)
```

**Example**:
```
GET /api/applications/my-applications?status=submitted&limit=10
```

**Success Response (200)**:
```json
{
  "success": true,
  "data": {
    "applications": [
      {
        "id": 1,
        "company_name": "Tech Corp",
        "job_title": "Software Engineer",
        "status": "submitted",
        "resume_filename": "resume.pdf",
        "created_at": "2025-09-27T11:00:00Z",
        "updated_at": "2025-09-27T12:00:00Z"
      }
    ],
    "count": 1
  }
}
```

---

#### Update Application Status
```http
PATCH /api/applications/:id/status
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "interview_requested",
  "notes": "Phone screen scheduled for tomorrow at 2 PM"
}
```

**Valid Status Values**:
- `not_submitted` - Draft stage
- `submitted` - Application sent
- `received_response` - Company replied
- `interview_requested` - Interview scheduled
- `rejected_after_interview` - Post-interview rejection
- `onsite_interview_requested` - On-site interview
- `offer_received` - Job offer received
- `rejected` - Application rejected
- `accepted` - Offer accepted

**Success Response (200)**:
```json
{
  "success": true,
  "message": "Application status updated successfully",
  "data": {
    "id": 1,
    "company_name": "Tech Corp",
    "job_title": "Software Engineer",
    "status": "interview_requested",
    "updated_at": "2025-09-27T15:30:00Z"
  }
}
```

---

### AI Agent Endpoints

#### Score Resume
```http
POST /api/agents/resume-scorer
Authorization: Bearer <token>
Content-Type: application/json

{
  "resumeText": "John Doe, Software Engineer with 5 years of experience in JavaScript, React, Node.js, Python...",
  "jobDescription": "We are seeking a Full-Stack Developer with 3+ years of experience in JavaScript frameworks..."
}
```

**Success Response (200)**:
```json
{
  "success": true,
  "task": "score-resume",
  "executionTime": 1234,
  "data": {
    "agentType": "resume-scorer",
    "score": 87,
    "matchedSkills": ["JavaScript", "React", "Node.js", "Python"],
    "missingSkills": ["Docker", "AWS"],
    "recommendations": [
      "Excellent match! Your resume aligns well with this job posting",
      "Great match on these skills: JavaScript, React, Node.js - make sure they're prominent",
      "Consider highlighting these missing skills if you have them: Docker, AWS"
    ],
    "details": {
      "skillMatch": {
        "score": 90,
        "matched": ["JavaScript", "React", "Node.js"],
        "missing": ["Docker", "AWS"]
      },
      "experienceMatch": {
        "score": 100,
        "resumeYears": 5,
        "requiredYears": 3
      },
      "educationMatch": {
        "score": 75
      },
      "keywordMatch": {
        "score": 85
      }
    }
  }
}
```

---

#### Generate Answers
```http
POST /api/agents/generate-answers
Authorization: Bearer <token>
Content-Type: application/json

{
  "resumeText": "Software Engineer with expertise in JavaScript...",
  "jobDescription": "Looking for a developer to join our team...",
  "questions": [
    "Why are you interested in this role?",
    "What makes you a good fit for this position?",
    "What is your greatest strength?"
  ]
}
```

**Success Response (200)**:
```json
{
  "success": true,
  "task": "generate-answers",
  "executionTime": 2100,
  "data": {
    "agentType": "answer-generator",
    "questions": [
      "Why are you interested in this role?",
      "What makes you a good fit for this position?",
      "What is your greatest strength?"
    ],
    "answers": [
      "I'm excited about this opportunity because it aligns perfectly with my technical expertise in JavaScript, React, and Node.js...",
      "I believe I'm an excellent fit for this role because of my strong background in full-stack development...",
      "My greatest strength is my ability to combine technical skills with strong problem-solving capabilities..."
    ],
    "tips": [
      "Customize each answer to reflect the specific company and role",
      "Use specific examples from your experience when possible",
      "Keep answers concise but comprehensive (2-3 minutes when spoken)"
    ]
  }
}
```

---

#### Extract Profile
```http
POST /api/agents/extract-profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "resumeText": "John Doe\njohn.doe@example.com\n555-1234\nSoftware Engineer\n\nEXPERIENCE:\nSenior Developer at Tech Corp..."
}
```

**Success Response (200)**:
```json
{
  "success": true,
  "task": "prepare-autofill",
  "executionTime": 890,
  "data": {
    "agentType": "autofill-agent",
    "profileData": {
      "personalInfo": {
        "firstName": "John",
        "lastName": "Doe",
        "fullName": "John Doe"
      },
      "contact": {
        "email": "john.doe@example.com",
        "phone": "555-1234",
        "linkedin": null,
        "github": null
      },
      "workExperience": [
        {
          "title": "Senior Developer",
          "company": "Tech Corp",
          "startDate": "2020",
          "endDate": "Present"
        }
      ],
      "education": [
        {
          "degree": "Bachelor of Science",
          "school": "University of Technology",
          "major": "Computer Science",
          "graduationYear": "2018"
        }
      ],
      "skills": {
        "programming": ["JavaScript", "Python"],
        "frameworks": ["React", "Node.js"],
        "databases": ["PostgreSQL", "MongoDB"],
        "tools": ["Git", "Docker"]
      }
    },
    "confidence": 85,
    "extractedFields": [
      "personalInfo.firstName",
      "personalInfo.lastName",
      "contact.email",
      "contact.phone",
      "workExperience",
      "education",
      "skills.programming"
    ]
  }
}
```

---

#### Full Analysis (Multi-Agent Workflow)
```http
POST /api/agents/full-analysis
Authorization: Bearer <token>
Content-Type: application/json

{
  "resumeText": "Complete resume content...",
  "jobDescription": "Complete job description..."
}
```

**Success Response (200)**: Combines results from all three agents

---

### Dashboard Endpoints

#### Dashboard Overview
```http
GET /api/dashboard/overview
Authorization: Bearer <token>
```

**Success Response (200)**:
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalApplications": 15,
      "totalResumes": 3,
      "statusBreakdown": {
        "not_submitted": 2,
        "submitted": 8,
        "interview_requested": 3,
        "rejected": 2
      }
    },
    "recentActivity": [
      {
        "id": 15,
        "company_name": "Tech Corp",
        "job_title": "Software Engineer",
        "status": "interview_requested",
        "created_at": "2025-09-27T10:00:00Z",
        "updated_at": "2025-09-28T14:30:00Z"
      }
    ],
    "agentUsage": [
      {
        "agent_type": "score-resume",
        "usage_count": "25",
        "avg_score": "78.5"
      }
    ]
  }
}
```

---

#### Status Analytics
```http
GET /api/dashboard/analytics/status?timeframe=30
Authorization: Bearer <token>

Query Parameters:
  - timeframe: Number of days (default: 30)
```

**Success Response (200)**:
```json
{
  "success": true,
  "data": {
    "timeSeriesData": [...],
    "statusDistribution": [
      { "status": "submitted", "count": "10" },
      { "status": "interview_requested", "count": "5" }
    ],
    "timeframe": "30 days"
  }
}
```

---

#### Application Pipeline
```http
GET /api/dashboard/pipeline
Authorization: Bearer <token>
```

**Success Response (200)**:
```json
{
  "success": true,
  "data": {
    "pipeline": [
      {
        "stage": "not_submitted",
        "count": 2,
        "applications": [...]
      },
      {
        "stage": "submitted",
        "count": 8,
        "applications": [...]
      }
    ],
    "rejected": 3
  }
}
```

---

### Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "message": "Error description"
}
```

**Common HTTP Status Codes**:
- `200` - Success
- `201` - Created
- `400` - Bad Request (invalid input)
- `401` - Unauthorized (missing/invalid token)
- `404` - Not Found
- `409` - Conflict (duplicate resource)
- `500` - Internal Server Error

---

## 🤖 Agentic AI System

### Architecture Overview

The system implements an **Agentic AI architecture** where multiple specialized agents work together under the coordination of a central orchestrator. This design pattern provides:

- **Modularity**: Each agent is self-contained and focused on a specific task
- **Reusability**: Agents can be combined in different workflows
- **Scalability**: New agents can be added without affecting existing ones
- **Maintainability**: Easy to update individual agents
- **Testability**: Agents can be tested independently

### Agent Orchestrator

**Location**: `src/agents/orchestrator/index.js`

The orchestrator is the central coordinator that:
1. Receives task requests from API endpoints
2. Determines which agent(s) to invoke
3. Manages agent execution (sequential or parallel)
4. Aggregates and formats results
5. Stores results in the database
6. Returns formatted responses

**Key Methods**:
```javascript
executeTask(task, context)  // Main entry point
scoreResumeWorkflow()        // Single agent workflow
generateAnswersWorkflow()    // Multi-agent sequential
fullAnalysisWorkflow()       // Multi-agent parallel
```

### Individual Agents

#### 1. Resume Scorer Agent

**Location**: `src/agents/resume-scorer/index.js`

**Purpose**: Analyzes resume against job description and provides match scoring

**Algorithm**:
```
1. Extract skills from resume and job description
2. Calculate skill match percentage (40% weight)
3. Analyze experience level match (30% weight)
4. Evaluate education match (15% weight)
5. Calculate keyword density (15% weight)
6. Generate overall score (0-100)
7. Provide recommendations
```

**Input**:
- `resumeText`: String containing resume content
- `jobDescription`: String containing job posting

**Output**:
```javascript
{
  score: 85,  // Overall match score
  matchedSkills: ["JavaScript", "React"],
  missingSkills: ["Docker", "AWS"],
  recommendations: ["..."],
  details: {
    skillMatch: {...},
    experienceMatch: {...},
    educationMatch: {...},
    keywordMatch: {...}
  }
}
```

**Key Features**:
- Keyword-based skill extraction
- Experience years calculation
- Education requirement matching
- Actionable recommendations

---

#### 2. Answer Generator Agent

**Location**: `src/agents/answer-generator/index.js`

**Purpose**: Generates personalized responses to application questions

**Algorithm**:
```
1. Analyze question type (interest, fit, strength, experience)
2. Extract relevant context from resume and job description
3. Generate answer using template + customization
4. Provide improvement tips
```

**Input**:
- `resumeText`: Resume content
- `jobDescription`: Job posting
- `questions`: Array of questions
- `resumeAnalysis`: Optional analysis from Resume Scorer

**Output**:
```javascript
{
  questions: ["Why are you interested?", ...],
  answers: ["I'm excited because...", ...],
  tips: ["Customize each answer...", ...]
}
```

**Question Types Supported**:
- Interest/motivation questions
- Fit/qualification questions
- Strength/skills questions
- Experience/background questions
- Generic application questions

---

#### 3. Autofill Agent

**Location**: `src/agents/autofill-agent/index.js`

**Purpose**: Extracts structured profile data from resume text

**Algorithm**:
```
1. Parse resume text by sections
2. Extract personal information (name, contact)
3. Identify work experience entries
4. Parse education details
5. Categorize skills by type
6. Calculate extraction confidence
```

**Input**:
- `resumeText`: Resume content

**Output**:
```javascript
{
  profileData: {
    personalInfo: {...},
    contact: {...},
    workExperience: [...],
    education: [...],
    skills: {...}
  },
  confidence: 85,
  extractedFields: [...]
}
```

**Extraction Patterns**:
- Email: Regex pattern matching
- Phone: Multiple format support
- Dates: Various date format parsing
- Skills: Keyword matching against common skills database
- Education: Degree and institution extraction

---

### Workflow Patterns

#### 1. Single Agent Workflow
```javascript
User Request → Orchestrator → Single Agent → Result → Response
```
Example: Resume Scoring

#### 2. Sequential Multi-Agent Workflow
```javascript
User Request → Orchestrator → Agent A → Agent B (uses A's output) → Result
```
Example: Answer Generation (uses Resume Scorer results)

#### 3. Parallel Multi-Agent Workflow
```javascript
User Request → Orchestrator → [Agent A, Agent B, Agent C] → Aggregate → Result
```
Example: Full Analysis (runs all agents simultaneously)

---

### Agent Communication

Agents communicate through standardized data structures:

```javascript
// Agent Input (Context)
{
  userId: 123,
  resumeText: "...",
  jobDescription: "...",
  // ... task-specific data
}

// Agent Output
