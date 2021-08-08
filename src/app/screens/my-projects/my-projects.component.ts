import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/shared/constants/projectList.constant';
import { ScrollingIds } from 'src/app/shared/constants/scrolling-Id.constant';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styles: [
  ]
})
export class MyProjectsComponent implements OnInit {

  projects = Projects;
  scrollingIds = ScrollingIds;
  constructor() { }

  ngOnInit(): void {
  }

  openProject(project): void {
    window.open(project.link, 'blank');
  }

}
