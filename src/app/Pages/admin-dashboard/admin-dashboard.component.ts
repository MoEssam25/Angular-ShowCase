import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../Services/project.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {
  // Tabs
  activeTab: string = 'projects';
  
  // Project Form
  newProject: any = {
    title: '',
    description: '',
    fullDescription: '',
    category: 'machine-learning',
    technologies: [],
    contributors: [],
    imageUrl: '',
    githubUrl: '',
    demoUrl: ''
  };
  
  currentTechnology: string = '';
  currentContributor: string = '';
  
  // Project List
  allProjects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadAllProjects();
  }

  // Tab Management
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Project Management
 loadAllProjects(): void {
  this.allProjects = this.projectService.getAllProjects();
 }

  // Technology Management
  addTechnology(): void {
    if (this.currentTechnology.trim()) {
      this.newProject.technologies.push(this.currentTechnology.trim());
      this.currentTechnology = '';
    }
  }

  removeTechnology(index: number): void {
    this.newProject.technologies.splice(index, 1);
  }

  // Contributor Management
  addContributor(): void {
    if (this.currentContributor.trim()) {
      this.newProject.contributors.push(this.currentContributor.trim());
      this.currentContributor = '';
    }
  }

  removeContributor(index: number): void {
    this.newProject.contributors.splice(index, 1);
  }

  // Form Submission

addProject(): void {
  if (this.validateProject()) {
    // Generate a new ID
    const maxId = this.allProjects.length > 0 ? Math.max(...this.allProjects.map(p => p.id)) : 0;
    this.newProject.id = maxId + 1;
    
    // Add to service
    this.projectService.addProject({...this.newProject});
    
    // Reset form
    this.resetForm();
    
    // Reload projects
    this.loadAllProjects();
    
    // Show success message
    alert('Project added successfully!');
  }
}

  validateProject(): boolean {
    if (!this.newProject.title.trim()) {
      alert('Please enter a project title');
      return false;
    }
    if (!this.newProject.description.trim()) {
      alert('Please enter a project description');
      return false;
    }
    if (this.newProject.technologies.length === 0) {
      alert('Please add at least one technology');
      return false;
    }
    if (this.newProject.contributors.length === 0) {
      alert('Please add at least one contributor');
      return false;
    }
    return true;
  }

  resetForm(): void {
    this.newProject = {
      title: '',
      description: '',
      fullDescription: '',
      category: 'machine-learning',
      technologies: [],
      contributors: [],
      imageUrl: '',
      githubUrl: '',
      demoUrl: ''
    };
  }

  // Project Actions
deleteProject(projectId: number): void {
  if (confirm('Are you sure you want to delete this project?')) {
    this.projectService.deleteProject(projectId);
    this.loadAllProjects();
    alert('Project deleted successfully!');
  }
}
}