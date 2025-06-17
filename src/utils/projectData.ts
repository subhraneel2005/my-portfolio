export const projectsData = [
  {
    title: "Kasukabe Blogs",
    technologies: ["Node.js", "Express", "Next.js", "MongoDB", "Redis", "JWT"],
    description:
      "Developed a headless blog CMS enabling users to write and manage blogs for integration into their websites. Implemented custom JWT authentication system with access and refresh tokens using httpOnly cookies. Built role-based authorization system with admin invite functionality through custom email service. Integrated Redis caching for optimized blog content delivery and implemented pagination for smooth navigation. Created comprehensive dashboard for blog management, analytics tracking, and draft management. Applied rate limiting and security middlewares to protect against common web vulnerabilities.",
    githubUrl: "https://github.com/Kasukabe-Labs/kasukabe-blogs",
    liveUrl: "https://kasukabe-blogs-prod.vercel.app/explore",
  },
  {
    title: "Remote OSS Companies Finder",
    technologies: ["React", "Fastify", "PostgreSQL", "Docker", "Puppeteer"],
    description:
      "Built a comprehensive platform for discovering remote and open-source companies using microservices architecture. Implemented cursor-based pagination with UUID for efficient data retrieval achieving sub-10ms response times. Developed three separate containerized services: Docker-based PostgreSQL database, Fastify API service, and Puppeteer scraping service. Created intelligent web scraping system with bot protection bypass capabilities for data collection. Implemented disk caching strategies and debounced search functionality for optimal user experience. Designed infinite scroll interface with real-time filtering and search capabilities.",
    githubUrl: "https://github.com/Kasukabe-Labs/opensource-jobs-platform",
    liveUrl: "https://oss-companies.vercel.app",
  },
  {
    title: "QuickAuth NPM Package",
    technologies: ["Node.js", "Express", "JWT", "OAuth2", "MongoDB"],
    description:
      "Developed and published a lightweight plug-and-play authentication middleware for Express backends. Implemented secure JWT credentials authentication and Google OAuth2 integration. Created comprehensive token management system with httpOnly cookies preventing XSS attacks. Designed modular folder structure with custom types and authentication middleware for easy integration. Built complete user schema with database configuration and clean, maintainable codebase. Published to NPM registry with detailed documentation and setup instructions.",
    githubUrl: "https://github.com/Kasukabe-Labs/quickauth",
    liveUrl: "https://www.npmjs.com/package/kasukabe-quickauth",
  },
  {
    title: "QuickAuth Core Utility Library",
    technologies: ["Node.js", "JWT", "bcrypt", "Google OAuth2"],
    description:
      "Created and published NPM library providing essential authentication utilities for Node.js applications. Developed password encryption utilities using bcrypt for secure password hashing. Implemented JWT token generation and validation utilities for access and refresh tokens. Built Google OAuth2 client integration with URL generation and token handling. Created Express cookie sender helper functions for secure token transmission. Designed zero-configuration setup allowing direct import and usage across multiple projects.",
    githubUrl: "https://github.com/subhraneel2005/quickauth-core",
    liveUrl: "https://www.npmjs.com/package/kasukabe-quickauth-core",
  },
  {
    title: "Kasukabe CMS",
    technologies: ["React", "Node.js", "Google OAuth", "Database Integration"],
    description:
      "Built CMS prompt engine with intelligent component picker and content management features. Integrated Google OAuth authentication for secure user management and session handling. Developed random prompt generator with AI-powered content suggestions and polishing tools. Implemented bookmarking system with database persistence for user content organization. Created custom color palette generator and theme management system.",
    githubUrl: "https://github.com/Kasukabe-Labs/kasukabe-cms",
    liveUrl: "https://kasukabe-cms-prod.vercel.app",
  },
];
