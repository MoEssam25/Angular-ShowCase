import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../Services/project.service';//../../services/project.service

@Component({
  selector: 'app-project-listing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-listing.component.html',
  styleUrl: './project-listing.component.scss'
})
export class ProjectListingComponent implements OnInit {
  category: string = '';
  projects: any[] = [];
  categoryName: string = '';

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.loadProjects();
      this.setCategoryName();
    });
  }

  loadProjects(): void {
    this.projects = this.projectService.getProjectsByCategory(this.category);
  }

  setCategoryName(): void {
    const categories: any = {
      'machine-learning': 'Machine Learning',
      'data-science': 'Data Science',
      'web-development': 'Web Development',
      'mobile-development': 'Mobile Development',
      'cybersecurity': 'Cybersecurity',
      'iot': 'IoT'
    };
    this.categoryName = categories[this.category] || this.category;
  }
}