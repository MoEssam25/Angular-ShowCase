import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectService } from '../../Services/project.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  project: any = null;
  projectId: number = 0;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = +params['id'];
      this.loadProject();
    });
  }

  loadProject(): void {
    this.isLoading = true;
    const foundProject = this.projectService.getProjectById(this.projectId);
    
    if (foundProject) {
      this.project = foundProject;
    } else {
      // Project not found - redirect to homepage
      this.router.navigate(['/']);
    }
    
    this.isLoading = false;
  }

  goBack(): void {
    this.router.navigate(['/projects', this.project.category]);
  }
}