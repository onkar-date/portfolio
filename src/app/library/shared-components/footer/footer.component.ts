import { SocialService } from './../../../shared/services/social.service';
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
    private socialMediaService: SocialService
  ) { }

  async ngOnInit(): Promise<void> {
    this.socialMedia = await this.getSocialMediaDetails();
  }

  async getSocialMediaDetails(): Promise<any> {
    return await this.socialMediaService.getSocialMediaDetails();
  }

  visit(contact): void {
    window.open(contact.url, '_blank');
  }

}
