import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Result} from '../models/Result';
import {environment} from '../../environments/environment';
import {ApplicationError} from '../models/ApplicationError';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    protected http: HttpClient
  ) { }

  protected async restCall(method: string, url: string, options: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.request<Result<any>>(method, `${environment.rootUrl}${url}`, options)
        .toPromise()
        .then((response: any) => {
          resolve(response);
        }).catch(error => reject(error));
    });
  }

}
