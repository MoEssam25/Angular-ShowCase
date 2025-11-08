import { Injectable } from '@angular/core';
import { Project, Category } from '../Models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];

  constructor() {
    this.initializeProjects();
  }

  private initializeProjects(): void {
    this.projects = [
      // Machine Learning Projects
      {
        id: 1,
        title: 'AI Medical Diagnosis System',
        description: 'Deep learning model for early disease detection using medical images with 95% accuracy.',
        fullDescription: 'A comprehensive deep learning system that analyzes medical images to detect early signs of diseases with 95% accuracy. Uses convolutional neural networks and transfer learning.',
        imageUrl: '../../assets/images/projects/medical-ai.png',
        technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras'],
        contributors: ['John Doe', 'Jane Smith', 'Dr. Wilson'],
        category: 'machine-learning',
        githubUrl: 'https://github.com/example/medical-ai',
        demoUrl: 'https://demo.example.com'
      },
      {
        id: 2,
        title: 'Predictive Analytics Dashboard',
        description: 'Real-time data visualization and prediction system for business intelligence.',
        fullDescription: 'Interactive dashboard that provides real-time predictive analytics for business decision making.',
        imageUrl: '../../assets/images/projects/analytics-dashboard.png',
        technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
        contributors: ['Mike Johnson', 'Sarah Chen'],
        category: 'machine-learning',
        githubUrl: 'https://github.com/example/analytics-dashboard'
      },

      // Data Science Projects
      {
        id: 3,
        title: 'COVID-19 Data Tracker',
        description: 'Real-time pandemic data analysis and visualization platform.',
        fullDescription: 'Comprehensive data analysis platform tracking COVID-19 spread patterns.',
        imageUrl: '../../assets/images/projects/covid-tracker.png',
        technologies: ['Python', 'Pandas', 'Plotly', 'FastAPI'],
        contributors: ['Alex Brown', 'Maria Garcia'],
        category: 'data-science',
        githubUrl: 'https://github.com/example/covid-tracker'
      },
      {
        id: 4,
        title: 'Stock Market Predictor',
        description: 'Machine learning model for stock price prediction and trend analysis.',
        fullDescription: 'Advanced ML model analyzing historical stock data for price predictions.',
        imageUrl: '../../assets/images/projects/stock-predictor.png',
        technologies: ['Python', 'Scikit-learn', 'Yahoo Finance API'],
        contributors: ['David Lee', 'Emma Wilson'],
        category: 'data-science'
      },

      // Web Development Projects
      {
        id: 5,
        title: 'E-commerce Platform',
        description: 'Full-stack online shopping solution with payment processing.',
        fullDescription: 'Complete e-commerce platform with user authentication and payment processing.',
        imageUrl: '../../assets/images/projects/ecommerce-platform.png',
        technologies: ['Angular', 'Spring Boot', 'MySQL', 'Stripe API'],
        contributors: ['Chris Taylor', 'Emily Davis'],
        category: 'web-development',
        demoUrl: 'https://demo-ecommerce.example.com'
      },
      {
        id: 6,
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for social media management and insights.',
        fullDescription: 'Comprehensive dashboard for managing multiple social media accounts.',
        imageUrl: '../../assets/images/projects/social-media-dashboard.png',
        technologies: ['Vue.js', 'Express.js', 'MongoDB'],
        contributors: ['Ryan Kim', 'Sophia Martinez'],
        category: 'web-development'
      },

      // Mobile Development Projects
      {
        id: 7,
        title: 'Fitness Tracking App',
        description: 'Workout tracking and exercise planning mobile application.',
        fullDescription: 'Cross-platform mobile app for workout tracking and fitness progress.',
        imageUrl: '../../assets/images/projects/fitness-app.png',
        technologies: ['React Native', 'Firebase', 'Redux'],
        contributors: ['Kevin Wilson', 'Lisa Martinez'],
        category: 'mobile-development'
      },
      {
        id: 8,
        title: 'Food Delivery App',
        description: 'Restaurant discovery and food delivery service application.',
        fullDescription: 'Mobile app connecting users with local restaurants for food delivery.',
        imageUrl: '../../assets/images/projects/food-delivery-app.png',
        technologies: ['Flutter', 'Node.js', 'MongoDB'],
        contributors: ['Tom Anderson', 'Nina Patel'],
        category: 'mobile-development'
      },

      // Cybersecurity Projects
      {
        id: 9,
        title: 'Network Security Monitor',
        description: 'Real-time threat detection and network monitoring system.',
        fullDescription: 'Enterprise-grade network security monitoring tool.',
        imageUrl: '../../assets/images/projects/security-monitor.png',
        technologies: ['Python', 'Wireshark', 'ELK Stack', 'Docker'],
        contributors: ['Security Team'],
        category: 'cybersecurity'
      },
      {
        id: 10,
        title: 'Password Manager',
        description: 'Secure password storage and management application.',
        fullDescription: 'Encrypted password manager with biometric authentication.',
        imageUrl: '../../assets/images/projects/password-manager.png',
        technologies: ['Java', 'SQLite', 'AES Encryption'],
        contributors: ['Security Researchers'],
        category: 'cybersecurity'
      },

      // IoT Projects
      {
        id: 11,
        title: 'Smart Home System',
        description: 'IoT-based home automation and control system.',
        fullDescription: 'Complete smart home system with sensor monitoring and automation.',
        imageUrl: '../../assets/images/projects/smart-home.png',
        technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'Node.js'],
        contributors: ['IoT Team'],
        category: 'iot'
      },
      {
        id: 12,
        title: 'Weather Monitoring Station',
        description: 'Real-time weather data collection and analysis system.',
        fullDescription: 'IoT weather station collecting and analyzing environmental data.',
        imageUrl: '../../assets/images/projects/weather-station.png',
        technologies: ['ESP32', 'Python', 'AWS IoT'],
        contributors: ['Weather Research Group'],
        category: 'iot'
      }
    ];
  }

  // Categories data
  getCategories(): Category[] {
    return [
      { 
        id: 1, 
        name: 'Machine Learning', 
        description: 'AI and ML projects', 
        icon: 'fas fa-brain',
        route: '/projects/machine-learning'
      },
      { 
        id: 2, 
        name: 'Data Science', 
        description: 'Data analysis and visualization', 
        icon: 'fas fa-chart-bar',
        route: '/projects/data-science'
      },
      { 
        id: 3, 
        name: 'Web Development', 
        description: 'Frontend and backend projects', 
        icon: 'fas fa-code',
        route: '/projects/web-development'
      },
      { 
        id: 4, 
        name: 'Mobile Development', 
        description: 'iOS and Android applications', 
        icon: 'fas fa-mobile-alt',
        route: '/projects/mobile-development'
      },
      { 
        id: 5, 
        name: 'Cybersecurity', 
        description: 'Security and protection systems', 
        icon: 'fas fa-shield-alt',
        route: '/projects/cybersecurity'
      },
      { 
        id: 6, 
        name: 'IoT', 
        description: 'Internet of Things solutions', 
        icon: 'fas fa-wifi',
        route: '/projects/iot'
      }
    ];
  }

  getProjectsByCategory(category: string): Project[] {
    return this.projects.filter(project => 
      project.category.toLowerCase() === category.toLowerCase()
    );
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }

  addProject(project: Project): void {
    this.projects.push(project);
  }

  deleteProject(projectId: number): void {
    this.projects = this.projects.filter(project => project.id !== projectId);
  }

  getAllCategories(): string[] {
    return ['machine-learning', 'data-science', 'web-development', 'mobile-development', 'cybersecurity', 'iot'];
  }
}