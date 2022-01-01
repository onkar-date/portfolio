import { ApiMethod } from './../constants/api';
import { UrlEndpoints } from './../constants/urlConstant';
import { WrapperService } from './wrapper.service';
import { Injectable } from '@angular/core';
import UrlHelper from '../helpers/url.helper';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(
    private apiService: WrapperService
  ) { }

  async getProjects(): Promise<any> {
    const projectUrl = UrlHelper.createUrl([environment.baseUrl, UrlEndpoints.projects]);
    return await this.apiService.Api(ApiMethod.GET, projectUrl);
  }

  async getSkillsData(): Promise<any> {
    const skillsDataUrl = UrlHelper.createUrl([environment.baseUrl, UrlEndpoints.skills]);
    return await this.apiService.Api(ApiMethod.GET, skillsDataUrl);
  }

  async getSocialMediaDetails(): Promise<any> {
    const socialMediaDetailsUrl = UrlHelper.createUrl([environment.baseUrl, UrlEndpoints.social]);
    return await this.apiService.Api(ApiMethod.GET, socialMediaDetailsUrl);
  }

  async getResume(): Promise<any> {
    const resumeUrl = UrlHelper.createUrl([environment.baseUrl, UrlEndpoints.resume]);
    return await this.apiService.Api(ApiMethod.GET, resumeUrl, 'blob');
  }
}
