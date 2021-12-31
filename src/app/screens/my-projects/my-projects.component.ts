import { ProjectService } from './../../shared/services/project.service';
import { Component, OnInit } from '@angular/core';
import { ScrollingIds } from 'src/app/shared/constants/scrolling-Id.constant';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styles: [
  ]
})
export class MyProjectsComponent implements OnInit {

  projects = [];
  scrollingIds = ScrollingIds;
  constructor(
    private projectService: ProjectService
  ) { }

  async ngOnInit(): Promise<void> {
    this.projects = await this.getProjects();
  }

  async getProjects(): Promise<any> {
    return await this.projectService.getProjects();
  }

  openProject(project): void {
    window.open(project.url, 'blank');
  }

}
