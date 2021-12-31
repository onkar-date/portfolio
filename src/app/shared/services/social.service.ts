import { ApiMethod } from './../constants/api';
import { WrapperService } from './wrapper.service';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import UrlHelper from '../helpers/url.helper';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(
    private apiService: WrapperService
  ) { }

  async getSocialMediaDetails(): Promise<any> {
    const socialMediaDetailsUrl = UrlHelper.createUrl([environment.baseUrl, 'social']);
    return await this.apiService.Api(ApiMethod.GET, socialMediaDetailsUrl);
  }
}
