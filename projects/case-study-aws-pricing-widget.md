---
title: AWS Database Pricing Widget
description: An interactive pricing configurator designed for the AWS Console that provides real-time cost estimates as customers configure their database resources. The widget dynamically calculates and displays pricing based on customer selections, connecting directly to the AWS Pricing API to ensure accuracy and transparency at the point of resource creation.
category: Product Design Tool
role: Lead Product Designer
timeline: 4 weeks
team: 2 (Designer, Engineer)
platform: AWS Console
---

# AWS Database Pricing Widget

## Overview
An interactive pricing configurator designed for the AWS Console that provides real-time cost estimates as customers configure their database resources. The widget dynamically calculates and displays pricing based on customer selections, connecting directly to the AWS Pricing API to ensure accuracy and transparency at the point of resource creation.

## Problem Statement
AWS customers consistently reported difficulty understanding pricing transparency, particularly during the resource creation process. Without clear visibility into costs at the point of configuration, customers struggled to make informed decisions about their database setup, leading to confusion and frustration. The challenge was to provide accurate, real-time pricing information that would help customers understand the financial implications of their configuration choices before committing to resource creation.

## My Role
- **Position/Title:** Lead Product Designer
- **Duration:** 4 weeks
- **Team Size:** 2 (1 Lead Product Designer, 1 Frontend Engineer)
- **Responsibilities:** Led the end-to-end design process, defined technical requirements and component functionality, designed the user interface and interaction patterns, established the component architecture for reusability across AWS services, and collaborated with engineering on implementation.

## Goals & Objectives
- Improve pricing transparency at the point of database resource creation
- Help customers make educated pricing decisions by providing real-time cost visibility
- Reduce customer confusion around AWS database pricing
- Create a reusable component that could be easily implemented across multiple AWS services

## Process

### Research & Discovery
Leveraged existing usability research study data that specifically highlighted customer pain points around pricing transparency. The research revealed that customers faced significant challenges understanding costs during the resource creation workflow, with many expressing uncertainty about the financial impact of their configuration choices. This foundational research provided clear direction for the design requirements and helped prioritize features that would directly address customer needs.

### Ideation & Design
The design approach focused on creating an interactive experience that would update dynamically as customers made configuration changes. Using Figma and the AWS Design System, I explored various layouts and interaction patterns that would seamlessly integrate into the existing AWS Console experience. The key design principle was to make pricing information visible and understandable without disrupting the configuration workflow. Multiple iterations refined the visual hierarchy, ensuring that pricing updates were noticeable but not distracting, and that cost breakdowns were clear and scannable.

### Development & Implementation
The technical architecture was designed with reusability as a core principle. The component was built to connect directly to the AWS Pricing API, with each configuration input mapped to its corresponding pricing SKU. This ensured that all pricing data was accurate and updated in real-time. I worked closely with the frontend engineer to define the component's logic, establishing a flexible architecture that would allow any AWS service team to implement the widget with minimal customization. The component was built using the AWS Design System to ensure consistency across the console ecosystem.

### Testing & Refinement
Throughout the development process, we validated the technical accuracy of pricing calculations by cross-referencing API responses with known pricing data. The component logic was tested across various configuration scenarios to ensure the pricing updates were accurate and performant. We also reviewed the design against AWS Design System guidelines to maintain consistency with the broader console experience.

## Key Features
1. **Real-Time Dynamic Pricing:** The component updates cost estimates instantly as customers modify their database configuration, providing immediate feedback on the financial impact of each decision.

2. **AWS Pricing API Integration:** Direct connection to the AWS Pricing API ensures that all displayed prices are accurate and reflect current rates, with each configuration input mapped to its corresponding pricing SKU.

3. **Reusable Component Architecture:** Built with flexibility in mind, the widget was designed and architected to be easily implemented by any AWS service team, reducing development overhead and ensuring consistency across the console.

## Technologies Used
- Figma (Design and prototyping)
- AWS Design System (UI components and patterns)
- AWS Pricing API (Real-time pricing data)
- Frontend web technologies (Implementation)

## Challenges & Solutions

### Challenge 1
**Problem:** Defining the component logic to accurately retrieve and display pricing data from the AWS Pricing API while ensuring it could be reused across different AWS services with varying configuration options.

**Solution:** Developed a flexible mapping system that connected each configuration input directly to its respective pricing SKU in the API. This approach allowed the component to be service-agnostic while maintaining pricing accuracy. By establishing clear data contracts and a modular architecture, the component could adapt to different services' needs without requiring significant re-engineering.

### Challenge 2
**Problem:** Ensuring real-time pricing updates were both accurate and performant, as incorrect pricing information could lead to customer distrust and poor decision-making.

**Solution:** Implemented a robust API integration strategy that optimized data retrieval and caching. Worked closely with the frontend engineer to establish validation checks and fallback mechanisms. This ensured that pricing calculations remained accurate even as customers rapidly changed configuration options, while maintaining a responsive user experience.

## Results & Impact
- The pricing widget is currently live and actively being used by AWS customers in the database creation workflow
- Successfully deployed a reusable component that can be implemented across multiple AWS services
- Directly addressed customer feedback regarding pricing transparency at the point of resource creation
- Established a foundation for improved pricing visibility throughout the AWS Console

## Key Takeaways
- Leveraging existing research data can significantly accelerate the design process and ensure customer needs are addressed from the start
- Building for reusability from the beginning, even with tight timelines, pays dividends when the component needs to scale across multiple services
- Close collaboration between design and engineering is essential when defining complex component logic and API integrations, particularly for accuracy-critical features like pricing

## Visuals
- Screenshot 1: Database configuration interface with pricing widget showing real-time cost estimates
- Screenshot 2: Pricing breakdown view displaying itemized costs per configuration option
- Screenshot 3: Widget integrated into different AWS service creation workflows demonstrating reusability

## Links
- **Live Demo:** Available in AWS Console (requires AWS account)
- **GitHub Repository:** Internal AWS repository
- **Case Study:** [This document]
- **AWS Design System:** [Link to design system documentation if applicable]

---

## Notes
This project established a precedent for pricing transparency in the AWS Console and created a scalable solution that can be adopted by other service teams. Future enhancements could include cost comparison features, savings recommendations, and historical pricing trends to further empower customers in making informed decisions. The success of this widget demonstrates the value of addressing customer pain points with thoughtful design and technical solutions that prioritize both usability and accuracy.