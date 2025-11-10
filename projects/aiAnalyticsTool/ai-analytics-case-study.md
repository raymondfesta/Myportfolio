# AI Data Analytics Tool

## Overview
An AI-powered data analytics tool that democratizes access to console usage insights by converting natural language queries into SQL, eliminating the need for technical expertise. The tool enables non-technical team members to explore complex data patterns and track feature usage through simple conversational requests.

## Problem Statement
Internal employees needed advanced insights from console usage data, but the existing analysis tools had significant barriers. Accessing this data required technical knowledge of SQL queries, data engineering, and data analysis. The legacy tool was restrictive and couldn't support complex analysis requiring advanced SQL queries or sophisticated data aggregations. This created a bottleneck where product managers, design leadership, and other designers who needed specific console usage insights couldn't easily obtain them, particularly when tracking usage after feature releases.

## My Role
- **Position/Title:** Lead Product Designer
- **Duration:** 6 weeks
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

Through initial testing of a single-shot query approach, I discovered that users struggled to formulate specific enough questions to get the data they needed. Most users didn't know how to describe what they wanted to see with sufficient precision. This finding led to a critical design pivot toward a conversational approach.

### Ideation & Design
**Conversational AI Decision:** I made the strategic decision to design a conversational AI experience rather than a one-shot query system. This approach allows users to explore data and insights beyond their initial question, creating opportunities for discovery and deeper analysis. The conversational model addresses a fundamental user need—most people don't know exactly how to ask for data upfront, but they can recognize valuable insights when they see them and ask intelligent follow-up questions.

The conversational design enables users to start with broad, simple questions and progressively refine their inquiry as the agent provides recommendations and follow-up prompts. Rather than focusing solely on query accuracy, I designed the experience around the narrative that emerges from the data—what story does this information tell? The centerpiece of this approach is the easy-to-read summarized report that transforms raw data into actionable insights.

To guide users, I created example prompts and conversation starters that demonstrate the types of questions the tool can answer. The interface supports query refinement and follow-up questions, allowing users to naturally explore related insights without having to restart their analysis or reformulate complex queries from scratch.

### Development & Implementation
Built using React for the front-end interface, Amazon Bedrock for AI-powered natural language processing and query generation, and Amazon Redshift as the data warehouse. 

**Technical Architecture:** The system consists of three key layers:
1. **Conversational Interface Layer:** React-based chat interface that maintains conversation context and displays both raw data and AI-generated insights
2. **AI Processing Layer:** Amazon Bedrock agent with a carefully engineered system prompt that includes the semantic data model and guides query generation
3. **Data Layer:** Amazon Redshift connection with optimized query execution and result formatting

**Semantic Data Model:** I developed a comprehensive semantic data model that serves as the critical translation layer between natural language concepts and the database schema. This model includes detailed table definitions, field descriptions, relationships between data entities, and encoded business logic. The semantic model acts as the agent's knowledge base, enabling it to understand user intent and generate accurate SQL queries.

The conversational agent maintains context across multiple turns, allowing it to reference previous queries, suggest related analyses, and help users drill down into specific patterns they discover. Results are presented in both tabular format for transparency and as narrative summaries that highlight key findings and trends.

### Testing & Refinement
Testing focused on validating query accuracy across different types of questions and ensuring the AI-generated summaries correctly interpreted the data. I tested various natural language phrasings for similar questions to improve the system's understanding of user intent. 

The iterative refinement process revealed significant improvements from the semantic data model implementation—query accuracy jumped from less than 20% to 90%. Additionally, the agent developed self-correction capabilities, allowing it to recognize when a query didn't return expected results and reformulate the approach.

I also validated the conversational flow with target users, confirming that the back-and-forth interaction pattern successfully enabled discovery of insights that users wouldn't have known to ask for initially.

## Key Features
1. **Conversational AI Interface:** Multi-turn conversation experience that allows users to start with simple questions and progressively explore deeper insights through natural dialogue, with guided prompts and follow-up suggestions
2. **Semantic Data Model:** Proprietary mapping layer that translates natural language concepts into accurate SQL queries by encoding table definitions, field relationships, and business logic—achieving 90% query accuracy
3. **Intelligent Data Storytelling:** Raw query results are automatically analyzed and transformed into narrative summaries that identify patterns, trends, and actionable insights, helping users understand what the data means for their work

## Technologies Used
- React
- Amazon Bedrock
- Amazon Redshift
- SQL
- Semantic metadata architecture
- System prompt engineering

## Challenges & Solutions

### Challenge 1: Creating an Accurate Semantic Data Model
**Problem:** The core challenge was building a semantic data model that could accurately translate natural language requests into correct SQL queries. The database schema was complex with non-obvious labeling and relationships between fields. Parent-child relationships existed between data fields, and multiple fields often needed to be combined to generate valuable insights. The labeling conventions weren't intuitive, making it difficult for an AI agent to understand what users were asking for and which tables/fields to query. Initial query accuracy was less than 20%, making the tool unreliable.

**Solution:** I developed a comprehensive three-step process to build the semantic data model:

1. **Discovery Queries:** I generated exploratory queries against the database and exported the results to understand the actual data structure and relationships
2. **Metadata Translation:** I created a translated semantic metadata file that mapped natural language concepts to database elements, including table definitions, field descriptions, relationships, and business logic rules
3. **Knowledge Base Integration:** I incorporated the semantic metadata file and sample queries into the main system prompt that powers the conversational agent, giving it a robust knowledge base for understanding user requests

This semantic layer acts as the critical translation mechanism between how users think about data (in business terms) and how data is actually stored (in technical database structures). The impact was dramatic—query accuracy improved from <20% to 90%, and the agent gained self-correction capabilities, allowing it to recognize and fix query errors autonomously.

### Challenge 2: Designing for User Discovery vs. Precision
**Problem:** Early testing with a one-shot query approach revealed that users didn't know how to describe the data they wanted with enough specificity. Most users couldn't formulate precise questions upfront because they weren't familiar with what data was available or how to articulate complex analytical requests. This created a barrier even when the technical SQL translation worked correctly.

**Solution:** I pivoted to a conversational AI experience that prioritizes exploration over precision. Instead of requiring users to ask perfect questions, the tool allows them to start broad and refine through dialogue. The agent provides follow-up questions and recommendations based on initial queries, guiding users toward deeper insights.

The key design innovation was shifting focus from "query accuracy" to "data storytelling"—what narrative emerges from the results? I created easy-to-read summarized reports that not only answer the user's question but also highlight related patterns and suggest additional avenues for exploration. This conversational approach enables users to discover insights they wouldn't have known to ask for, making previously impossible analyses accessible to non-technical team members.

### Challenge 3: Understanding Database Schema and Data Storage Patterns
**Problem:** Understanding how data was stored in order to accurately have the system create queries that would return correct results. The complexity of the data structure meant that incorrect schema interpretation would lead to inaccurate insights.

**Solution:** I created comprehensive documentation of the database schema and established clear mappings between natural language concepts and database tables/fields through the semantic data model. This involved deep analysis of the data structure to understand relationships, creating a knowledge base that the AI could reference, and implementing validation checks to ensure generated queries aligned with the actual data architecture. The semantic metadata file became the single source of truth for how the agent interprets and queries the database.

## Results & Impact
- **Query Accuracy:** Improved from <20% to 90% through semantic data model implementation
- **Agent Intelligence:** System gained self-correction capabilities, recognizing and fixing query errors autonomously
- **Capability Unlock:** Made previously impossible advanced analysis accessible to all team members, removing technical barriers entirely
- **Discovery Enablement:** Conversational approach allows users to discover insights they wouldn't have known to ask for initially
- **Democratized Data Access:** Product managers, design leaders, and designers can now independently explore console usage patterns without requiring data engineering support
- **Improved Decision Making:** Teams can quickly validate hypotheses and track feature usage post-launch, accelerating product iteration cycles
- **Resource Efficiency:** Reduced dependency on technical resources for routine data analysis requests

## Key Takeaways
- **Semantic modeling is the foundation:** Building an accurate semantic data model that maps natural language to database schema is critical for AI-powered query tools—this translation layer is what enables non-technical users to access technical data
- **Conversational beats one-shot:** Users don't know what they don't know. A conversational approach that supports exploration and progressive refinement is far more effective than requiring precise upfront queries, especially for non-technical users
- **Focus on storytelling, not just data:** The combination of accurate data retrieval and intelligent narrative summarization is essential—raw data alone doesn't provide value without interpretation that highlights patterns and suggests next steps
- **Iteration drives accuracy:** The semantic data model required iterative refinement through discovery queries and testing, but the result was a dramatic improvement in query accuracy (from <20% to 90%)

## Visuals
- Screenshot 1: Conversational interface showing natural language input with example prompts and conversation starters
- Screenshot 2: Multi-turn conversation demonstrating how users refine queries and ask follow-ups
- Screenshot 3: Results view displaying both raw data table and AI-generated narrative summary with insights
- Screenshot 4: System architecture diagram illustrating the semantic data model layer between user input and database queries
- Screenshot 5: Example of the semantic metadata structure showing the translation between natural language concepts and database schema

## Links
- **Live Demo:** Internal tool (not publicly accessible)
- **GitHub Repository:** N/A
- **Case Study:** N/A
- **Other:** N/A

---

## Notes
This project demonstrated the powerful impact of combining AI capabilities with thoughtful UX design and robust semantic modeling to break down technical barriers. The conversational approach and semantic data model work together to enable true data democratization—users can now explore insights that were previously locked behind technical expertise requirements.

Future improvements could include saved conversation history, automated scheduling for recurring reports, collaborative features for sharing insights across teams, and expansion of the semantic model to support additional data sources beyond console usage data. The architecture is extensible and the semantic modeling approach could be applied to other complex datasets across the organization.