import TULogo from './imgs/tu darmstadt.png'
import LNULogo from './imgs/LNU.png'
import personalMark from './imgs/yw-mark.svg'

const resume = {
    name: "Yibo Wang",
    role: "Software & Machine Learning Engineer",
    mark: personalMark,
    contact: {
      location: "Germany",
      email: "wyibo00@outlook.com",
      linkedin: "https://www.linkedin.com/in/yibo-w-b1114922b/",
      github: "https://github.com/Yibo391"
    },
    summary: "Master’s student in Computer Science at Technische Universität Darmstadt and Working Student at Fraunhofer SIT. I build reliable, scalable software and apply machine-learning techniques to practical problems, with experience across full-stack web development, AI systems, and collaborative research projects.",
    education: [
      {
        institution: "Technische Universität Darmstadt",
        logo: TULogo,  // Use imported image
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
        logo: LNULogo,  // Use imported image
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
        title: "LiveCoWrite | Real-Time Collaborative Writing Platform",
        icon: "🤖",  // Add AI icon
        link: "https://livecowrite.ukp.informatik.tu-darmstadt.de/",  // Verify this link is correct
        details: [
          "Built real-time collaborative editing workflows with React and TypeScript",
          "Designed a RESTful API layer to support dependable client–server data flow",
          "Deployed and maintained the application infrastructure with Nginx and systemd"
        ]
      },
      {
        title: "Smart Chat Bot | Local LLM Full-Stack Application",
        icon: "💬", 
        link:"https://github.com/Yibo391/SmartChatBot?tab=readme-ov-file",
        details: [
          "Built a conversational web application with React and Node.js",
          "Integrated a locally deployed DeepSeek-R1 model through Ollama",
          "Designed a MySQL data model for conversation and content records"
        ]
      },
      {
        title: "Cloud-Disk | Full-Stack Development",
        icon: "☁️",  // Add cloud icon
        details: [
          "Developed cloud-native storage solution with Spring Boot/Vue 3",
          "Engineered modern authentication protocols with token validation"
        ],
        link:'https://github.com/Yibo391/cloud-disk?tab=readme-ov-file'

      }
    ],
    experience: [
      {
        title: "Working Student",
        company: "Fraunhofer Institute for Secure Information Technology SIT",
        period: "May 2025 – Present",
        location: "Darmstadt, Germany",
        details: [
          "Contributing to applied research and software development in a security-focused research environment",
          "Collaborating with interdisciplinary teams to develop dependable technical solutions"
        ]
      },
      {
        title: "Independent Contractor",
        company: "Outlier",
        period: "February 2025 – April 2025",
        location: "Remote",
        details: [
          "Trained and evaluated AI models for code-generation tasks",
          "Applied Java and Python expertise to assess technical accuracy and instruction following"
        ]
      },
      {
        title: "Software Developer Intern",
        company: "Lakritsoft AB",
        period: "February 2021 – August 2021",
        location: "Gothenburg, Sweden",
        details: [
          "Developed responsive client websites with HTML, CSS, JavaScript, and Bootstrap",
          "Improved usability and accessibility through responsive design patterns"
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
    languages: ["Chinese (Native)", "English (Professional working proficiency)"],
    hobbies: [
      {
        category: "Sports",
        icon: "⚽",
        items: ["Padel", "PingPong", "Badminton"],
        description: "Weekly badminton games with friends."
      },
      {
        category: "Technology",
        icon: "💻",
        items: ["Building PCs", "Medium blogs", "Exploring new tech"],
        description: "Active contributor to write technical articles."
      },
      {
        category: "Creative",
        icon: "📸",
        items: ["TikTok video editing", "Gaming Clips"],
        description: "Amateur editor focusing on vlog and gaming clips."
      },
      {
        category: "Gaming",
        icon: "🎮",
        items: ["Valorant", "Counter-Strike 2"],
        description: "Faceit Lv10 Player in CS, Radiant in Valorant."
      }
    ]
  };
  
  console.log(resume);

  export { resume };
