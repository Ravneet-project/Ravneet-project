# Ravneet Sawhney

<div align="center">

### Full Stack Developer | MERN Stack Enthusiast | MCA Graduate 2025

Building scalable web applications, REST APIs and database-driven software solutions.

[Portfolio](https://ravneetportfolio.netlify.app) |
[GitHub](https://github.com/Ravneet-project) |
[LinkedIn](https://www.linkedin.com/in/ravneet-kaur-aa2b332a8/) |
[Email](mailto:ravneet.sawhney123@gmail.com)

</div>

---

## Developer Architecture

```mermaid
flowchart LR

    A[MCA Graduate 2025] --> B[Full Stack Developer]

    B --> C[Frontend Development]
    B --> D[Backend Development]
    B --> E[Database Management]
    B --> F[Development Tools]

    C --> C1[React.js]
    C --> C2[JavaScript]
    C --> C3[TypeScript]
    C --> C4[HTML5]
    C --> C5[CSS3]
    C --> C6[Bootstrap]

    D --> D1[Node.js]
    D --> D2[Express.js]
    D --> D3[PHP]
    D --> D4[REST APIs]

    E --> E1[(MongoDB)]
    E --> E2[(MySQL)]

    F --> F1[Git]
    F --> F2[GitHub]
    F --> F3[Postman]
    F --> F4[VS Code]
    F --> F5[npm]
    F --> F6[XAMPP]

    C1 --> G[Full Stack Projects]
    D2 --> G
    D3 --> G
    E1 --> G
    E2 --> G

    G --> H[Continuous Learning]
    H --> I[Software Engineering Career]
```

---

## About Me

I am a Full Stack Developer passionate about building scalable, user-centric and maintainable web applications.

My development experience includes frontend interfaces, backend development, REST API integration, relational and NoSQL databases, responsive design and complete project implementation.

I enjoy transforming ideas into functional software solutions while continuously improving my understanding of modern development practices, system design, data structures and application architecture.

```text
Current Role      : Full Stack Developer
Qualification     : Master of Computer Applications
Graduation Year   : 2025
Primary Focus     : MERN Stack Development
Secondary Stack   : PHP and MySQL
Career Status     : Open to Software Developer Opportunities
```

---

## Developer Class Model

```mermaid
classDiagram
direction LR

class RavneetSawhney {
    +String role
    +String qualification
    +String specialization
    +buildWebApplications()
    +developRESTAPIs()
    +designDatabases()
    +solveProblems()
    +learnContinuously()
}

class FrontendDevelopment {
    +ReactJS
    +JavaScript
    +TypeScript
    +HTML5
    +CSS3
    +Bootstrap
    +buildResponsiveInterfaces()
    +createReusableComponents()
}

class BackendDevelopment {
    +NodeJS
    +ExpressJS
    +PHP
    +RESTAPIs
    +Authentication
    +implementBusinessLogic()
}

class DatabaseManagement {
    +MongoDB
    +MySQL
    +designSchema()
    +optimizeQueries()
    +validateData()
}

class DevelopmentTools {
    +Git
    +GitHub
    +Postman
    +VSCode
    +npm
    +XAMPP
}

class SoftwareProjects {
    +FeedOne
    +SmartBookmarkApp
    +PortfolioWebsite
    +ComplaintsManagementSystem
}

RavneetSawhney --> FrontendDevelopment : develops
RavneetSawhney --> BackendDevelopment : implements
RavneetSawhney --> DatabaseManagement : manages
RavneetSawhney --> DevelopmentTools : uses
RavneetSawhney --> SoftwareProjects : builds
```

---

## Technical Skills

### Frontend Development

```text
React.js
JavaScript ES6+
TypeScript
HTML5
CSS3
Bootstrap
Responsive Web Design
Reusable Component Development
```

### Backend Development

```text
Node.js
Express.js
PHP
RESTful API Development
Server-Side Programming
Authentication and Authorization
Request Validation
Business Logic Development
```

### Databases

```text
MongoDB
MySQL
Database Design
Schema Planning
CRUD Operations
Query Optimization
Data Validation
```

### Tools and Technologies

```text
Git
GitHub
Postman
Visual Studio Code
npm
XAMPP
Vite
```

---

## Technical Capability Matrix

| Development Area | Technologies | Primary Focus |
|---|---|---|
| Frontend | React.js, JavaScript, TypeScript | Responsive and reusable interfaces |
| Backend | Node.js, Express.js, PHP | REST APIs and server-side logic |
| Database | MongoDB, MySQL | Database design and query management |
| Version Control | Git, GitHub | Repository and source-code management |
| API Testing | Postman | Endpoint testing and validation |
| Development Tools | VS Code, npm, XAMPP | Development, debugging and execution |
| Problem Solving | DSA, OOP | Logical thinking and optimized solutions |

---

## Application Architecture

```mermaid
flowchart LR

    User[Application User]

    subgraph ClientLayer[Client Layer]
        React[React.js]
        JavaScript[JavaScript]
        TypeScript[TypeScript]
        HTML[HTML5]
        CSS[CSS3]
        Bootstrap[Bootstrap]
    end

    subgraph APILayer[API Layer]
        REST[REST API]
        Validation[Request Validation]
        Authentication[Authentication]
    end

    subgraph ServerLayer[Server Layer]
        Node[Node.js]
        Express[Express.js]
        PHP[PHP]
        Logic[Business Logic]
    end

    subgraph DataLayer[Data Layer]
        MongoDB[(MongoDB)]
        MySQL[(MySQL)]
    end

    User --> React
    React --> JavaScript
    React --> TypeScript
    React --> HTML
    React --> CSS
    CSS --> Bootstrap

    React --> REST
    REST --> Validation
    Validation --> Authentication
    Authentication --> Express
    Express --> Node
    REST --> PHP

    Node --> Logic
    PHP --> Logic

    Logic --> MongoDB
    Logic --> MySQL
```

---

## Development Workflow

```mermaid
flowchart LR

    Requirement[Requirement Analysis]
    --> Research[Research]
    --> Planning[Project Planning]
    --> Design[UI and Architecture Design]
    --> Frontend[Frontend Development]
    --> Backend[Backend Development]
    --> Database[Database Integration]
    --> API[API Integration]
    --> Testing[Testing and Debugging]
    --> Deployment[Deployment]
    --> Monitoring[Monitoring]
    --> Improvement[Continuous Improvement]

    Improvement --> Requirement
```

---

## API Request Lifecycle

```mermaid
sequenceDiagram
    actor User
    participant UI as React Interface
    participant API as REST API
    participant Server as Node / Express / PHP
    participant DB as MongoDB / MySQL

    User->>UI: Performs an action
    UI->>API: Sends HTTP request
    API->>Server: Validates request
    Server->>DB: Reads or updates data
    DB-->>Server: Returns result
    Server-->>API: Creates response
    API-->>UI: Returns JSON response
    UI-->>User: Displays updated information
```

---

## Featured Projects

```mermaid
flowchart TD

    Projects[Featured Projects]

    Projects --> FeedOne[FeedOne]
    Projects --> Bookmark[Smart Bookmark App]
    Projects --> Portfolio[Personal Portfolio]
    Projects --> Complaint[Academic Complaints System]

    FeedOne --> F1[Donation Management]
    FeedOne --> F2[Donor and NGO Coordination]
    FeedOne --> F3[Administrative Management]
    FeedOne --> F4[PHP, MySQL and Bootstrap]

    Bookmark --> B1[Bookmark Organization]
    Bookmark --> B2[Resource Management]
    Bookmark --> B3[TypeScript and JavaScript]

    Portfolio --> P1[Project Showcase]
    Portfolio --> P2[Responsive User Interface]
    Portfolio --> P3[React.js and Vite]

    Complaint --> C1[Complaint Registration]
    Complaint --> C2[Complaint Tracking]
    Complaint --> C3[HTML, CSS and JavaScript]
```

---

### FeedOne – Donation Management System

FeedOne is a web-based donation management platform designed to connect donors and NGOs through a centralized system.

The application helps simplify donation tracking, NGO coordination and administrative management.

```text
Technology Stack
├── PHP
├── MySQL
├── Bootstrap
└── JavaScript
```

---

### Smart Bookmark App

A bookmark management application developed using TypeScript to help users organize, manage and access saved web resources efficiently.

```text
Technology Stack
├── TypeScript
└── JavaScript
```

---

### Personal Portfolio Website

A responsive portfolio website created to showcase my projects, technical skills and development experience.

```text
Technology Stack
├── React.js
├── Vite
└── CSS3
```

Live Project:

[Ravneet Portfolio](https://ravneetportfolio.netlify.app)

---

### Academic Complaints Management System

A web-based complaint management solution designed to streamline complaint registration and tracking within educational institutions.

```text
Technology Stack
├── HTML5
├── CSS3
└── JavaScript
```

---

## Current Focus

```mermaid
mindmap
  root((Current Focus))
    MERN Development
      React Applications
      Node.js
      Express.js
      MongoDB
    Backend Engineering
      REST APIs
      Authentication
      Authorization
      Request Validation
    Database Engineering
      Schema Design
      Query Optimization
      Data Validation
    Problem Solving
      Data Structures
      Algorithms
      Object-Oriented Programming
    Software Engineering
      Clean Code
      Scalable Architecture
      Testing
      Maintainability
    Career Development
      Open Source
      Technical Interviews
      Software Developer Roles
```

---

## Career Roadmap

```mermaid
flowchart TD

    MCA[MCA Graduate 2025]
    --> Foundation[Programming Foundation]
    --> Web[Web Development]

    Web --> Frontend[Frontend Development]
    Web --> Backend[Backend Development]
    Web --> Database[Database Management]

    Frontend --> React[React.js]
    Backend --> Node[Node.js and Express.js]
    Backend --> PHP[PHP Development]
    Database --> MongoDB[(MongoDB)]
    Database --> MySQL[(MySQL)]

    React --> MERN[MERN Applications]
    Node --> MERN
    MongoDB --> MERN

    PHP --> FullStack[Full Stack Projects]
    MySQL --> FullStack

    MERN --> Production[Production-Ready Applications]
    FullStack --> Production

    Production --> Developer[Software Developer]
    Developer --> Engineer[Software Engineer]
    Engineer --> Growth[Continuous Professional Growth]
```

---

## Git Development Workflow

```mermaid
gitGraph

    commit id: "Project Setup"

    branch frontend
    checkout frontend
    commit id: "Build UI"
    commit id: "Add React Components"

    checkout main
    merge frontend

    branch backend
    checkout backend
    commit id: "Create REST API"
    commit id: "Add Authentication"

    checkout main
    merge backend

    branch database
    checkout database
    commit id: "Design Schema"
    commit id: "Connect Database"

    checkout main
    merge database

    commit id: "Test Application"
    commit id: "Deploy Project"
```

---

## GitHub Profile Statistics

<div align="center">

<img
    src="./profile-summary-card-output/github_dark/0-profile-details.svg"
    alt="Ravneet Sawhney Profile Details"
    width="100%"
/>

</div>

<br>

<div align="center">

<img
    src="./profile-summary-card-output/github_dark/3-stats.svg"
    alt="Ravneet Sawhney GitHub Statistics"
    width="49%"
/>

<img
    src="./profile-summary-card-output/github_dark/4-productive-time.svg"
    alt="Ravneet Sawhney Productive Time"
    width="49%"
/>

</div>

<br>

<div align="center">

<img
    src="./profile-summary-card-output/github_dark/1-repos-per-language.svg"
    alt="Repositories Per Language"
    width="49%"
/>

<img
    src="./profile-summary-card-output/github_dark/2-most-commit-language.svg"
    alt="Most Commit Language"
    width="49%"
/>

</div>

---

## Contribution Streak

<div align="center">

<a href="https://git.io/streak-stats">
  <img
    src="./profile/streak.svg"
    alt="Ravneet Sawhney GitHub Contribution Streak"
    width="80%"
  />
</a>

</div>

---

## Contribution Activity

<div align="center">

<a href="https://github.com/Ashutosh00710/github-readme-activity-graph">
  <img
    src="https://github-readme-activity-graph.vercel.app/graph?username=Ravneet-project&theme=github-compact&hide_border=true&area=true&custom_title=Ravneet%20Sawhney%27s%20Contribution%20Graph"
    alt="Ravneet Sawhney GitHub Contribution Activity"
    width="100%"
  />
</a>

</div>

## Developer Query

```sql
SELECT
    name,
    role,
    qualification,
    specialization,
    career_status
FROM developers
WHERE github_username = 'Ravneet-project';
```

```text
+------------------+----------------------+----------------+--------------------+---------------------------+
| Name             | Role                 | Qualification  | Specialization     | Career Status             |
+------------------+----------------------+----------------+--------------------+---------------------------+
| Ravneet Sawhney  | Full Stack Developer | MCA Graduate   | MERN Development   | Open to Opportunities     |
+------------------+----------------------+----------------+--------------------+---------------------------+
```

---

## Career Objective

To obtain a Software Developer position where I can apply my technical knowledge, contribute to meaningful projects, collaborate with experienced engineering teams and continue growing as a software engineering professional.

```mermaid
flowchart LR

    Knowledge[Technical Knowledge] --> Developer[Software Developer]
    Projects[Project Experience] --> Developer
    ProblemSolving[Problem Solving] --> Developer
    Teamwork[Team Collaboration] --> Developer
    Learning[Continuous Learning] --> Developer

    Developer --> Solutions[Build Valuable Solutions]
    Solutions --> Impact[Create Meaningful Impact]
    Impact --> Growth[Grow as a Software Engineer]
```

---

## Education

```text
Master of Computer Applications

Duration    : 2023 – 2025
Status      : Completed
Focus Areas : Software Development, Web Technologies,
              Databases and Problem Solving
```

---

## Connect With Me

| Platform | Profile |
|---|---|
| Portfolio | [ravneetportfolio.netlify.app](https://ravneetportfolio.netlify.app) |
| GitHub | [github.com/Ravneet-project](https://github.com/Ravneet-project) |
| LinkedIn | [Ravneet Sawhney](https://www.linkedin.com/in/ravneet-kaur-aa2b332a8/) |
| Email | [ravneet.sawhney123@gmail.com](mailto:ravneet.sawhney123@gmail.com) |

---

<div align="center">

### Learn. Build. Test. Deploy. Improve.

Great software is created through curiosity, consistency, clean architecture and continuous improvement.

</div>
