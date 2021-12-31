import { ApiMethod } from './../constants/api';
import { WrapperService } from './wrapper.service';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import UrlHelper from '../helpers/url.helper';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private apiService: WrapperService
  ) { }

  async getProjects(): Promise<any> {
    const projectUrl = `${environment.baseUrl}/${UrlHelper.createUrl(['projects'])}`;
    return await this.apiService.Api(ApiMethod.GET, projectUrl);
  }
}