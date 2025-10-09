---
title: Amazon Timestream Data Model Visual Builder
description: A visual design tool that simplifies data model creation for Amazon Timestream, a serverless time-series database. This project addressed a critical adoption barrier by helping developers—particularly those migrating from SQL databases—understand and correctly structure their data in a schemaless environment, reducing setup time from 90+ days to a matter of hours.
category: Database Design Tool
role: Lead Designer
timeline: 6 weeks
team: 6 (Engineers, PM, Architect)
platform: AWS Console
---

# Amazon Timestream: Data Model Visual Builder

## Overview
A visual design tool that simplifies data model creation for Amazon Timestream, a serverless time-series database. This project addressed a critical adoption barrier by helping developers—particularly those migrating from SQL databases—understand and correctly structure their data in a schemaless environment, reducing setup time from 90+ days to a matter of hours.

## Problem Statement
New customers struggled to adopt Amazon Timestream due to fundamental misunderstandings about schemaless time-series data structure. Developers with SQL backgrounds attempted to structure Timestream databases using traditional relational patterns, resulting in inefficient queries, failed implementations, and a setup process that took over 90 days. Many customers would realize their data model was incorrect only after ingesting data and attempting queries, forcing them to restart the entire process or abandon the service altogether. This friction was significantly impacting service adoption and customer retention.

## My Role
- **Position/Title:** Lead Designer
- **Duration:** 6 weeks
- **Team Size:** 6 (Service Engineers, Console Engineer, Solution Architect, Product Manager, Senior Development Manager)
- **Responsibilities:** Led design strategy, conducted research to identify root causes, created visual design solutions, collaborated with cross-functional team to ensure technical feasibility, tested prototypes with internal users and solution architects

## Goals & Objectives
- Reduce the cognitive load for new customers setting up their first time-series data model
- Help SQL database users understand the fundamental differences in schemaless time-series data structure
- Increase completion rates for key workflows: Batch Load (data import) and Scheduled Queries (retention driver)
- Accelerate time-to-value and improve overall service adoption

## Process

### Research & Discovery
I began by investigating the root cause of low adoption rates through multiple channels:

- Support ticket analysis: Identified patterns in customer struggles and common misconceptions
- Solution Architect collaboration: Held regular meetings with SAs who worked directly with new customers during onboarding, gathering firsthand insights into pain points
- Customer journey mapping: Documented the typical 90+ day setup process and identified friction points

Key finding: Customers were attempting to apply SQL database structuring principles to a schemaless, time-series environment—like trying to fit a square peg in a round hole. This mismatch led to data models that caused queries to scan far more data than necessary, resulting in poor performance and high costs.

### Ideation & Design
The design approach centered on two key principles:

1. Match the customer's mental model: Meet developers where they are in their understanding
2. Educate while enabling: Use the interface itself as a teaching tool for time-series concepts

I chose a visual builder approach over alternatives (improved documentation, tutorials, CLI tools) because it could simultaneously guide and educate users. The visual representation would make abstract concepts concrete while preventing common structural errors.

Key design decisions:

- Template-based starting points: Surface data model formats that were previously buried in documentation
- Auto-detection from samples: Allow customers to upload sample data and automatically generate appropriate structure
- Visual relationship mapping: Show how dimensions, measures, and time columns relate—making the schemaless structure comprehensible

I created prototypes in Figma using the AWS Console Design System library and tested with internal users and solution architects to validate the approach.

### Development & Implementation
Collaborated closely with:

- Service engineers to understand backend constraints and data model validation requirements
C- onsole engineers to implement the visual interface and ensure performance with various data model sizes
- Solution architects to validate that the tool addressed real customer needs and aligned with best practices

The team worked iteratively, with regular check-ins to ensure technical feasibility while maintaining design integrity.

### Testing & Refinement
Internal testing with solution architects revealed critical insights:

- The visual relationship mapping needed to scale effectively for large schemas (initially struggled with complex data models)
- We needed to account for various data model formats that customers might use
- Template categorization needed refinement based on common use cases

Refinements included optimized rendering for large schemas and more intuitive template organization.

## Key Features
1. **Template-Based Data Model Creation:** Pre-configured templates based on common time-series use cases and supported data model formats. These templates, previously hidden deep in documentation, provide developers with validated starting points that follow Timestream best practices.
2. **Auto Schema Detection from Sample Records:** Customers can upload sample data or records, and the system automatically analyzes the structure and populates the correct data model fields. This removes guesswork and ensures proper dimensional vs. measure field categorization.
3. **Visual Data Relationship Mapping:** An interactive diagram that shows how dimensions (attributes), measures (metrics), and time columns relate within the schemaless structure. This visualization bridges the mental model gap for SQL-background developers by making abstract time-series concepts tangible and understandable.

## Technologies Used
- Figma (design and prototyping)
- AWS Console Design System library
- Amazon Timestream (backend service)
- AWS Console infrastructure (frontend implementation)

## Challenges & Solutions

### Scaling Visual Relationship Mapping
**Problem:** The initial visual data model mapping worked well for simple schemas but became cluttered and difficult to navigate with large, complex data models containing dozens of dimensions and measures.
**Solution:** Implemented progressive disclosure patterns and grouping mechanisms. Large schemas could be collapsed into logical groups, and users could drill down into specific relationships. Added zoom and pan controls for better navigation of complex visualizations.

### Supporting Multiple Data Model Formats
**Problem:** Timestream supports various data model formats depending on use case (IoT, DevOps monitoring, application metrics, etc.). The visual builder needed to accommodate this variety without becoming overwhelming or confusing.
**Solution:** Created format-specific templates with contextual guidance. The interface adapts based on the selected format, showing only relevant configuration options and providing inline education about when to use each approach. This kept the interface clean while maintaining flexibility.

### Bridging the SQL Mental Model Gap
**Problem:** Developers with SQL backgrounds instinctively tried to structure data relationally, leading to inefficient schema designs that would only reveal problems after data ingestion.
**Solution:** Integrated educational elements directly into the visual builder. Used familiar SQL terminology where appropriate but provided clear comparisons showing "SQL approach vs. Timestream approach." Real-time validation warnings alert users when their structure might lead to query inefficiencies.

## Results & Impact
- 51% completion rate for new customers (accounts 0-7 days old) using the visual data model builder, compared to JSON editor or manual methods
- Contributed to 70% increase in total active users over one year (alongside cross-service integration improvements)
- Reduced setup time from 90+ days to hours, eliminating the costly restart cycle when data models were configured incorrectly
- Improved retention through higher completion rates for Scheduled Queries workflow, a key retention driver
- Accelerated POC development: Customer feedback indicated the tool made "setting up and testing to do a POC much easier and faster"

The visual builder particularly impacted two critical workflows:

Batch Load: Enabled new customers to successfully import data on first attempt
Scheduled Queries: Increased completion rates for creating scheduled queries, directly improving customer retention

## Key Takeaways
- Simplify cognitive-heavy tasks: Breaking down complex, unfamiliar concepts into visual, guided experiences dramatically lowers barriers to entry for new users. The 90+ day setup time wasn't due to technical complexity alone—it was cognitive overload.
- Meet users where they are: Understanding a customer's existing mental model (SQL databases) and their intent (data migration) allowed me to design an experience that bridged the gap to new concepts (schemaless time-series) rather than forcing them to start from scratch.
- The interface is the education: Rather than relying on external documentation or tutorials, embedding contextual learning directly into the workflow ensured customers learned the right patterns while completing real tasks. The visual builder didn't just enable configuration—it taught time-series best practices.

## Visuals
- Screenshot 1: Template selection interface showing common use-case templates
- Screenshot 2: Auto schema detection analyzing sample data
- Screenshot 3: Visual relationship mapping showing dimensions, measures, and time columns
- Demo video/GIF: End-to-end workflow from template selection to data model validation

## Links
- **Live Demo:** URL
- **GitHub Repository:** URL
- **Case Study:** URL
- **Other:** URL

---

## Notes
This project demonstrates how thoughtful UX design can address not just usability issues, but fundamental adoption barriers rooted in knowledge gaps and misconceptions. By focusing on the customer's mental model and existing expertise (SQL), we created a bridge to new technology rather than expecting customers to abandon their existing frameworks.
The success of this project reinforced the importance of close collaboration with customer-facing teams (Solution Architects) who have direct insight into real-world pain points. Their input was invaluable in ensuring the solution addressed actual customer needs rather than perceived problems.
Future improvements could include: expanded template library based on emerging use cases, collaborative data model design for teams, and version control for data model iterations.