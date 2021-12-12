import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {UserDTO} from '../models/dto/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService{

  private userUrl = '/users';
  private signInUrl = '/signin';
  private signUpUrl = '/signup';

  constructor(http: HttpClient) {
    super(http);
  }

  public async loginPOST(username: string, password: string): Promise<string> {
    const url = `${this.userUrl}${this.signInUrl}`;
    const options = {
      params: {
        username,
        password
      },
      responseType: 'text' as const
    };
    return (await this.restCall('POST', url, options));
  }

  public async signUpPOST(userDTO: UserDTO): Promise<string> {
    const url = `${this.userUrl}${this.signUpUrl}`;
    const options = {
      body: {
        username: userDTO.username,
        password: userDTO.password,
        email: userDTO.email
      },
      responseType: 'text' as const
    };
    return (await this.restCall('POST', url, options));
  }
}
