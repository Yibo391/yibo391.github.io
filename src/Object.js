import TULogo from './imgs/tu darmstadt.png'
import LNULogo from './imgs/LNU.png'

const resume = {
    name: "Yibo Wang",
    contact: {
      location: "Frankfurt, Germany",
      phone: "017685939823",
      email: "wyibo00@outlook.com",
    },
    summary: "Computer Science master's student at TU Darmstadt, specializing in Natural Language Processing and Machine Learning. Experienced in full-stack development with a strong foundation in AI/ML technologies. Passionate about creating innovative solutions and contributing to cutting-edge research in NLP. Proven track record of collaborative project success and technical leadership.",
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
        title: "AI Editor | Academic Research Initiative",
        icon: "🤖",  // Add AI icon
        link: "https://livecowrite.ukp.informatik.tu-darmstadt.de/",  // Verify this link is correct
        details: [
          "Architected real-time collaborative editing platform with React/TypeScript",
          "Established RESTful API communication layer for seamless data flow",
          "Deployed production-grade infrastructure with Nginx/systemd"
        ]
      },
      {
        title: "Smart Chat Bot | Full-Stack Development",
        icon: "💬", 
        link:"https://github.com/Yibo391/SmartChatBot?tab=readme-ov-file",
        details: [
          "Engineered full-stack conversational interface with React.js/Node.js",
          "Customized local LLM integration using Ollama framework",
          "Structured MySQL database architecture for dynamic content recording"
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
    languages: ["Chinese", "English"],
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
