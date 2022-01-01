import { MyDataService } from './../../../shared/services/my-data.service';
import { Component, OnInit } from '@angular/core';
import { ScrollingIds } from 'src/app/shared/constants/scrolling-Id.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  scrollingIds = ScrollingIds;
  socialMedia = null;
  constructor(
    private myDataService: MyDataService
  ) { }

  async ngOnInit(): Promise<void> {
    this.socialMedia = await this.getSocialMediaDetails();
  }

  async getSocialMediaDetails(): Promise<any> {
    return await this.myDataService.getSocialMediaDetails();
  }

  visit(contact): void {
    window.open(contact.url, '_blank');
  }

}
