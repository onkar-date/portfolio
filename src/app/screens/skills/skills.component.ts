import { Skills } from './../../shared/constants/skills.constant';
import { Component, OnInit } from '@angular/core';
import { ScrollingIds } from 'src/app/shared/constants/scrolling-Id.constant';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [
  ]
})
export class SkillsComponent implements OnInit {
  scrollingIds = ScrollingIds;
  skillsList = Skills;
  constructor() { }

  ngOnInit(): void {
  }

}
