# AI Data Analytics Tool

## Overview
An AI-powered data analytics tool that democratizes access to console usage insights by converting natural language queries into SQL, eliminating the need for technical expertise. The tool enables non-technical team members to explore complex data patterns and track feature usage through simple conversational requests.

## Problem Statement
Internal employees needed advanced insights from console usage data, but the existing analysis tools had significant barriers. Accessing this data required technical knowledge of SQL queries, data engineering, and data analysis. The legacy tool was restrictive and couldn't support complex analysis requiring advanced SQL queries or sophisticated data aggregations. This created a bottleneck where product managers, design leadership, and other designers who needed specific console usage insights couldn't easily obtain them, particularly when tracking usage after feature releases.

## My Role
- **Position/Title:** Lead Product Designer
- **Duration:** 4 weeks
- **Team Size:** Solo project
- **Responsibilities:** End-to-end ownership including concept development, design, build, and testing

## Goals & Objectives
- Democratize advanced data analysis by making it accessible to everyone, regardless of technical background
- Enable any team member to ask questions about console usage behavior in natural language and receive accurate data-driven answers
- Provide post-launch feature tracking capabilities for product teams
- Eliminate dependency on data engineering resources for routine analysis requests

## Process

### Research & Discovery
I conducted a self-study by documenting my own attempts to use the available data analysis tools. This involved mapping out the complete process required to obtain advanced analysis, identifying pain points at each step, and determining which types of analysis were impossible with existing tools. This hands-on research revealed the exact friction points that non-technical users faced when attempting to access data insights.

### Ideation & Design
The design approach centered on removing all technical barriers between users and their data questions. I focused on creating an intuitive natural language interface that would feel conversational rather than technical. The key design challenge was ensuring the system could accurately interpret user intent and translate it into precise SQL queries while presenting results in an easily digestible format that highlighted patterns and insights automatically.

### Development & Implementation
Built using React for the front-end interface, Amazon Bedrock for AI-powered natural language processing and query generation, and Amazon Redshift as the data warehouse. The architecture was designed to handle the translation layer between natural language inputs and SQL queries, with careful mapping of the database schema to ensure query accuracy. The system generates both raw data results and AI-summarized insights that identify patterns and answer the user's original question.

### Testing & Refinement
Testing focused on validating query accuracy across different types of questions and ensuring the AI-generated summaries correctly interpreted the data. I tested various natural language phrasings for similar questions to improve the system's understanding of user intent. Refinement involved tuning the database schema mapping to improve query precision and adjusting the summary output format based on readability and actionability of insights.

## Key Features
1. **Natural Language Query Interface:** Users can ask questions about console usage data in plain English without needing to know SQL syntax or database structure
2. **Advanced Query Generation:** The AI accurately translates complex analytical questions into sophisticated SQL queries with proper data aggregations and joins
3. **Intelligent Data Summarization:** Raw query results are automatically analyzed and transformed into human-readable reports that highlight key patterns, trends, and insights relevant to the user's question

## Technologies Used
- React
- Amazon Bedrock
- Amazon Redshift
- SQL

## Challenges & Solutions

### Challenge 1
**Problem:** Understanding the database schema and how data was stored in order to accurately have the system create queries that would return correct results. The complexity of the data structure meant that incorrect schema interpretation would lead to inaccurate insights.

**Solution:** I created comprehensive documentation of the database schema and established clear mappings between natural language concepts and database tables/fields. This involved working closely with the data structure to understand relationships, creating a knowledge base that the AI could reference, and implementing validation checks to ensure generated queries aligned with the actual data architecture.

### Challenge 2
**Problem:** Translating ambiguous natural language requests into precise SQL queries without losing the user's intended meaning or over-constraining the analysis.

**Solution:** Developed a multi-step interpretation process where the system first identifies the key entities and metrics in the user's question, maps them to database elements, and constructs queries with appropriate flexibility. The AI-generated summary layer also helps clarify what was actually analyzed, providing transparency into how the question was interpreted.

## Results & Impact
- **Capability Unlock:** Made previously impossible or extremely difficult advanced analysis accessible to all team members, removing technical barriers entirely
- **Democratized Data Access:** Product managers, design leaders, and designers can now independently explore console usage patterns without requiring data engineering support
- **Improved Decision Making:** Teams can quickly validate hypotheses and track feature usage post-launch, accelerating product iteration cycles
- **Resource Efficiency:** Reduced dependency on technical resources for routine data analysis requests

## Key Takeaways
- Understanding the underlying data architecture is critical for AI-powered query tools—accuracy depends on proper schema mapping and validation
- Democratizing data access has compounding benefits beyond the immediate use case, enabling data-driven decision making across previously excluded teams
- The combination of accurate data retrieval and intelligent summarization is essential—raw data alone doesn't provide value without interpretation and pattern identification

## Visuals
- Screenshot 1: Natural language query interface showing the input field and example questions
- Screenshot 2: Results view displaying both raw data table and AI-generated insights summary
- Screenshot 3: System architecture diagram illustrating the flow from natural language input through AI processing to data retrieval and summarization
- Screenshot 4: Example analysis showing console usage patterns with highlighted insights

## Links
- **Live Demo:** Internal tool (not publicly accessible)
- **GitHub Repository:** N/A
- **Case Study:** N/A
- **Other:** N/A

---

## Notes
This project demonstrated the powerful impact of combining AI capabilities with thoughtful UX design to break down technical barriers. Future improvements could include saved query templates, automated scheduling for recurring reports, and collaborative features for sharing insights across teams. The tool's architecture is extensible and could be adapted to other data sources beyond console usage data.