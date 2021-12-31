import { environment } from './../../../environments/environment';
import { ApiMethod } from './../constants/api';
import { WrapperService } from './wrapper.service';
import { Injectable } from '@angular/core';
import UrlHelper from '../helpers/url.helper';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(
    private apiService: WrapperService
  ) { }

  async getSkillsData(): Promise<any> {
    const skillsDataUrl = UrlHelper.createUrl([environment.baseUrl, 'skills']);
    return await this.apiService.Api(ApiMethod.GET, skillsDataUrl);
  }
}
