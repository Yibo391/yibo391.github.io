const resume = {
    name: "Yibo Wang",
    contact: {
      location: "Frankfurt, Germany",
      phone: "017685939823",
      email: "wyibo00@outlook.com"
    },
    education: [
      {
        institution: "Technische Universität Darmstadt",
        period: "October 2023 – Present",
        degree: "Master of Science in Computer Science",
        mainCourses: [
          "Natural Language Processing",
          "Machine Learning",
          "Deep Learning",
          "Large Language Models",
          "Computer Vision"
        ]
      },
      {
        institution: "Linnaeus University",
        location: "Växjö, Sweden",
        period: "August 2020 – August 2023",
        degree: "Bachelor of Science in Software Technology",
        mainCourses: [
          "Database Management",
          "Computer Networks",
          "Operating Systems",
          "Web Programming",
          "Object-Oriented Programming (OOP)",
          "Software Testing"
        ]
      }
    ],
    projects: [
      {
        title: "AI Editor | Academic Research Initiative",
        details: [
          "Architected real-time collaborative editing platform with React/TypeScript",
          "Established RESTful API communication layer for seamless data flow",
          "Deployed production-grade infrastructure with Nginx/systemd"
        ]
      },
      {
        title: "Smart Chat Bot | Full-Stack Development",
        details: [
          "Engineered full-stack conversational interface with React.js/Node.js",
          "Customized local LLM integration using Ollama framework",
          "Structured MySQL database architecture for dynamic content recording"
        ]
      },
      {
        title: "Cloud-Disk | Full-Stack Development",
        details: [
          "Developed cloud-native storage solution with Spring Boot/Vue 3",
          "Engineered modern authentication protocols with token validation"
        ]
      }
    ],
    experience: [
      {
        title: "Internship",
        company: "Lakritsoft AB",
        period: "07/2021 - 11/2021",
        location: "Gothenburg, Sweden",
        details: [
          "Built a single-page application to display a restaurant's menu",
          "Implemented responsive design patterns maintaining visual coherence",
          "Deployed the application to GitHub Page"
        ]
      }
    ],
    skills: {
      programmingLanguages: ["Java", "JavaScript", "Python", "Typescript"],
      frameworks: ["Spring Boot", "MyBatis", "Vue", "React", "Flask", "FastAPI", "Express", "PyTorch"],
      databaseManagement: ["MySQL", "PostgreSQL"],
      security: ["Spring Security", "User Authentication"],
      other: ["Responsive Design", "CI/CD", "RESTful API", "AWS EC2", "AWS Lambda", "AWS S3"],
      toolsAndTechnologies: ["Git", "Nginx", "Postman", "scikit-learn", "Jira", "Trello"]
    },
    languages: ["Chinese", "English"]
  };
  
  console.log(resume);

  export { resume };
