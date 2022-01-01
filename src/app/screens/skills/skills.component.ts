import { MyDataService } from './../../shared/services/my-data.service';
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
  skillsData = null;
  constructor(
    private myDataService: MyDataService
  ) { }

  async ngOnInit(): Promise<void> {
    this.skillsData = await this.getSkillsData();
  }

  async getSkillsData(): Promise<any> {
    return await this.myDataService.getSkillsData();
  }

}
